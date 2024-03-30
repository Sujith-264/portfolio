"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "utils/motions";
import { useTheme } from "next-themes";

export function HeadingDivider({ title = "" }) {
    const { theme } = useTheme();

    // Define light and dark mode colors
    const lightTextColor = "#333";
    const darkTextColor = "#f7fafc";

    // Adjust text color based on theme
    const textColor = theme === "light" ? lightTextColor : darkTextColor;

    return (
        <header className="flex items-center">
            <LazyMotion features={domAnimation}>
                <m.h2
                    tabIndex="0"
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={transition}
                    className="heading-divider"
                    style={{ color: textColor }} // Apply dynamic text color
                >
                    {title}
                </m.h2>
            </LazyMotion>
        </header>
    );
}
