import React, { useState } from "react";
import { motion , AnimatePresence } from "framer-motion";
import { HeadingDivider } from "components";
import { LazyMotion, domAnimation } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { useTheme } from "next-themes";
const certificates = [
  {
    id: 1,
    title: "AICTE Cybersecurity",
    description: "Click To View",
    imageURL: "/certificates/AICTEcyber.jpg",
    type: "Internship",
  },
  {
    id: 2,
    title: "Verzeo Cybersecurity",
    description: "Click To View",
    imageURL: "/certificates/verzeointern.jpg",
    type: "Internship",
  },
  {
    id: 3,
    title: "Gustovalley's Industry 4.0",
    description: "Click To View",
    imageURL: "/certificates/gusto.jpg",
    type: "Internship",
  },
  {
    id: 4,
    title: "Introduction to Cybersecurity",
    description: "Click To View ",
    imageURL: "/certificates/cyber.jpg",
    type: "Course",
  },
  {
    id: 5,
    title: "The Fundamentals of Cloud Security",
    description: "Click To View ",
    imageURL: "/certificates/cloud.jpg",
    type: "Course",
  },
  {
    id: 6,
    title: "The Fundamentals of Network Security",
    description: "Click To View ",
    imageURL: "/certificates/network.jpg",
    type: "Course",
  },
  {
    id: 7,
    title: "The Fundamentals of SoC",
    description: "Click To View ",
    imageURL: "/certificates/soc.jpg",
    type: "Course",
  },
  {
    id: 8,
    title: "C Training",
    description: "Click To View ",
    imageURL: "/certificates/c.jpg",
    type: "Course",
  },
  {
    id: 9,
    title: "Cpp Training",
    description: "Click To View ",
    imageURL: "/certificates/cpp.jpg",
    type: "Course",
  },
  {
    id: 10,
    title: "Cybersecurity",
    description: "Click To View ",
    imageURL: "/certificates/verzeocourse.jpg",
    type: "Course",
  },
  {
    id: 11,
    title: "Introduction to Machine Learning",
    description: "Click To View ",
    imageURL: "/certificates/iitkgpml.jpg",
    type: "Course",
  },
  {
    id: 12,
    title: "Data Visualization with Tableau",
    description: "Click To View ",
    imageURL: "/certificates/infytableau.jpg",
    type: "Course",
  },
  {
    id: 13,
    title: "C programming for beginners on Windows",
    description: "Click To View ",
    imageURL: "/certificates/infyc.jpg",
    type: "Language",
  },
  {
    id: 14,
    title: "Complete Modern C++",
    description: "Click To View ",
    imageURL: "/certificates/infycpp.jpg",
    type: "Language",
  },
  {
    id: 15,
    title: "Javascript",
    description: "Click To View ",
    imageURL: "/certificates/infyjs.jpg",
    type: "Language",
  },
  {
    id: 16,
    title: "Basics of Python",
    description: "Click To View ",
    imageURL: "/certificates/infypy.jpg",
    type: "Language",
  },
  {
    id: 17,
    title: "Object-Oriented Analysis, Design and Programming with UML",
    description: "Click To View ",
    imageURL: "/certificates/infyuml.jpg",
    type: "Language",
  },
  {
    id: 18,
    title: "Python Essentials 1",
    description: "Click To View ",
    imageURL: "/certificates/ciscopy.jpg",
    type: "Language",
  },
  
];

const CertificateCard = ({ title, description, imageURL }) => {
  const [isHovered, setHovered] = useState(false);

  const cardVariants = {
    hover: {
      x: 10,
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const layerVariants = {
    hover: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    initial: {
      height: "0%",
      opacity: 0,
    },
  };

  const descriptionVariants = {
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    initial: {
      opacity: 0,
    },
  };

  const openImageInNewTab = () => {
    window.open(imageURL, "_blank");
  };

  return (
    <div className="relative">

      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="max-w-xs bg-white rounded-lg overflow-hidden shadow-md m-4 relative overflow-hidden"
        initial="initial"
        style={{ width: "350px", height: "224px" }}
        animate={isHovered ? "hover" : "initial"}
        variants={cardVariants}
      >
        <motion.img
          src={imageURL}
          alt={`Certificate: ${title}`}
          className="w-full h-full object-cover cursor-pointer"
          loading="lazy"
          onClick={openImageInNewTab}
        />
        <motion.div
          className="p-4 absolute top-0 left-0 right-0 bottom-0 text-white overflow-hidden flex flex-col items-center justify-center"
          variants={layerVariants}
          style={{ position: "absolute", overflow: "hidden" }}
        >
          <motion.div
            variants={descriptionVariants}
            className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-blue-500 to-transparent"
          >
            <div className="mt-2 z-1">
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-white">{description}</p>
            </div>
          </motion.div>
          <FaEye
            size={32}
            onClick={openImageInNewTab}
            style={{ cursor: "pointer", zIndex: 1 }}
          />
        </motion.div>
      </motion.div>

    </div>
  );
};

const TabButton = ({ active, selectTab, children }) => {
  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  const buttonClasses = active
    ? `text-${isLightTheme ? "blue-500" : "white"} font-bold`
    : `text-${isLightTheme ? "gray-600" : "gray-300"}`;

  return (
    <button
      onClick={selectTab}
      className={"relative text-xl hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"}
      style={{
        display: "flex",
        alignItems: "center",
        outline: "none",
        background: isLightTheme ? "transparent" : "",
      }}
    >
      <p className={`mr-3 ${buttonClasses}`}>{children}</p>
      <motion.div
        initial="inactive"
        whileHover="hover"
        animate={active ? "hover" : "inactive"}
        variants={{
          hover: { width: "100%" },
          inactive: { width: 0 },
        }}
        className={`h-1 ${
          isLightTheme ? "bg-blue-500" : "bg-primary-500"
        } mt-2 absolute bottom-0 left-0 w-full`}
      ></motion.div>
      {active && !isLightTheme && (
        <motion.div
          initial="inactive"
          animate="hover"
          variants={{
            hover: { width: "100%" },
            inactive: { width: 0 },
          }}
          className="h-1 bg-transparent mt-2 absolute bottom-0 left-0 w-full"
        ></motion.div>
      )}
    </button>
  );
};

export const CertificateSection = () => {
  const [selectedTab, setSelectedTab] = useState("Course");

  const containerVariants = {
    enter: { opacity: 1, transition: { staggerChildren: 0.15 } },
    exit: { opacity: 0 },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="section" id="certifications">
        <HeadingDivider title="Certifications" />
        <div
          style={{
            marginBottom: "20px",
            marginTop: "30px",
            marginLeft: "30px",
            marginRight:"30px",
            display: "flex", // Add display: flex to make children flex items
          }}
        >
          
          <TabButton
            active={selectedTab === "Course"}
            selectTab={() => setSelectedTab("Course")}
          >
            Courses
          </TabButton>
          <TabButton
            active={selectedTab === "Language"}
            selectTab={() => setSelectedTab("Language")}
          >
            Languages
          </TabButton>
          <TabButton
            active={selectedTab === "Internship"}
            selectTab={() => setSelectedTab("Internship")}
          >
            Internships
          </TabButton>
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab}
            initial="exit"
            animate="enter"
            exit="exit"
            variants={containerVariants}
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {certificates
              .filter((certificate) => certificate.type === selectedTab)
              .map((certificate) => (
                <motion.div
                  key={certificate.id}
                  variants={cardVariants}
                  style={{ margin: "30px" }}
                >
                  <CertificateCard {...certificate} />
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </LazyMotion>
  );
};