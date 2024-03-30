import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

export function WelcomeAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { theme, systemTheme } = useTheme();
  const colorMode = theme === "system" ? systemTheme : theme;
  const darkThemeColor = colorMode === "dark";

  // Replace the SVG paths with your picture frame
  const pictureFrame = (
	<Image
	src="https://github.com/Sujith-264/portfolio/blob/main/public/DP.jpg?raw=true" // Update with the correct file path of your image
	alt="Your Image"
	width={300}
	height={300}
	objectFit="cover"
  />
  );
  
  

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "300px", // Set a width for your picture frame
        height: "300px", // Set a height for your picture frame
        overflow: "hidden", // Hide any overflow if the image is larger than the frame
        border: darkThemeColor ? "2px solid #fff" : "2px solid #000", // Border color based on theme
        borderRadius: "18px", // Optional: Add border-radius for a rounded frame
        transform: isInView ? "none" : "translateX(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
      }}
    >
      {pictureFrame}
    </div>
  );
}
