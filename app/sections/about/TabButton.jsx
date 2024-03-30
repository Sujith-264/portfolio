import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const variants = {
  hover: { width: "100%" },
  inactive: { width: 0 },
};

const TabButton = ({ active, selectTab, children }) => {
  const { theme } = useTheme();
  const isLightTheme = theme === "light";
  const buttonClasses = active
    ? `text-${isLightTheme ? "blue-500" : "white"}`
    : `text-${isLightTheme ? "gray-600" : "gray-300"}`;

  return (
    <button
      onClick={selectTab}
      className={`relative text-xl font-semibold hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full`}
    >
      <p className={`mr-3 ${buttonClasses}`}>{children}</p>
      <motion.div
        initial="inactive"
        whileHover="hover"
        animate={active ? "hover" : "inactive"}
        variants={variants}
        className={`h-1 ${
          isLightTheme ? "bg-blue-500" : "bg-white"
        } mt-2 absolute bottom-0 left-0 w-full`}
      ></motion.div>
    </button>
  );
};

export default TabButton;
