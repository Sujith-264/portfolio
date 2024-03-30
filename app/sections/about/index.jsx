import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Express</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Python</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <mark style={{ fontWeight: 'bold' }}>Prasad V Potluri Siddhartha Institute of Technology</mark>
          <ul className="list-disc pl-4">
            <li>Bachelor of Technology in Information Technology</li>
            <li>CGPA of 8.11</li>
          </ul>
        </li>
        <li>
		<mark style={{ fontWeight: 'bold' }}>Sri Chaitanya Junior College</mark>
          <ul className="list-disc pl-4">
            <li>Board of Intermediate Education (MPC)</li>
            <li>CGPA of 9.28</li>
          </ul>
        </li>
        <li>
		<mark style={{ fontWeight: 'bold' }}>Sri Vidya E.M. School</mark>
          <ul className="list-disc pl-4">
            <li>State Board of Secondary Education</li>
            <li>GPA of 10</li>
          </ul>
        </li>
      </ul>
    ),
  },
];

export function AboutSection() {
  const [tab, setTab] = React.useState("skills");
  const [isPending, startTransition] = React.useTransition();
  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="section" id="about">
        <HeadingDivider title="About me" />
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div className="md:order-last flex justify-end">
            <video width="640" height="360" autoPlay muted>
              <source src="./assets/About.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-8 md:mt-0 text-left flex flex-col h-full md:order-first">
            <p className={`text-base lg:text-lg ${isLightTheme ? 'text-black' : 'text-white'}`}>
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Redux, Node.js, Express,
              PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner
              and I am always looking to expand my knowledge and skill set. I
              am a team player and I am excited to work with others to create
              amazing applications.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
        <TimeLine />
      </section>
    </LazyMotion>
  );
}
