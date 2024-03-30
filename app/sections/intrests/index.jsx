"use client";
import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from 'next/image';
import { HeadingDivider } from "components";

const interestsData = [
  {
    id: 1,
    title: "UI / UX Design",
    icon: "./assets/card1.svg",
    description: "Passionate about crafting intuitive and visually appealing user experiences to enhance digital interactions.",
  },
  {
    id: 2,
    title: "Data Analytics",
    icon: "./assets/card2.svg",
    description: " Proficient in extracting valuable insights from data, employing statistical analysis and visualization techniques to inform strategic decision-making.   ",
  },
  {
    id: 3,
    title: "Data Science",
    icon: "./assets/card3.svg",
    description: "Dedicated to leveraging advanced analytics and machine learning to extract meaningful patterns from complex datasets, contributing to data-driven solutions and innovation.",
  },
];

const InterestCard = ({ title, icon, description, theme }) => {
    const controls = useAnimation();
  
    const handleHover = async () => {
      await controls.start({ y: -10, backgroundColor: theme === 'light' ? "#8345be" : "#2d3748" });
    };
  
    const handleHoverExit = async () => {
      await controls.start({ y: 0, backgroundColor: theme === 'light' ? "#272627" : "#4a5568" });
    };
  
    return (
      <motion.li
        className="rounded-xl overflow-hidden cursor-pointer text-white"
        initial={{ y: 0, backgroundColor: theme === 'light' ? "#272627" : "#4a5568" }}
        animate={controls}
        whileHover="hover"
        onHoverStart={handleHover}
        onHoverEnd={handleHoverExit}
        variants={{
          hover: {
            y: -10,
            backgroundColor: theme === 'light' ? "#4B5563" : "#2d3748",
            transition: {
              duration: 0.3,
              type: "keyframes",
              ease: [0.4, 0, 0.2, 1], 
            },
          },
        }}
      >
        <div className="h-16 w-16 p-4">
          <Image src={icon} alt={`${title} Icon`} width={100} height={100} />
        </div>
        <div className="p-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-white">{description}</p>
        </div>
      </motion.li>
    );
  };
  

const Interests = ({ theme }) => {
  const ref = useRef(null);

  return (
    <section id="interests" className="mb-10">
      <HeadingDivider title="My Interests" />
      <br/><br/><br/>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-16">
        {interestsData.map((interest) => (
          <InterestCard
            key={interest.id}
            title={interest.title}
            icon={interest.icon}
            description={interest.description}
            theme={theme}
          />
        ))}
      </ul>
    </section>
  );
};

export default Interests;
