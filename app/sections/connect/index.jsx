"use client";
import React from "react";
import { useTheme } from "next-themes";
import { BsPhone, BsEnvelope, BsLinkedin, BsGithub, BsDiscord, BsInstagram, BsFacebook } from "react-icons/bs";
import { HeadingDivider } from "components";

const ConnectMe = () => {
  const { theme } = useTheme();

  // Define light and dark mode colors
  const lightTextColor = "#333";
  const darkTextColor = "#f7fafc";

  // Adjust text color based on theme
  const textColor = theme === "light" ? lightTextColor : darkTextColor;

  // Define icon components
  const IconComponent = {
    phone: BsPhone,
    envelope: BsEnvelope,
    linkedin: BsLinkedin,
    github: BsGithub,
    discord: BsDiscord,
    instagram: BsInstagram,
    facebook: BsFacebook,
  };

  // Replace these with your actual handles or links
  const linkedinLink = "https://www.linkedin.com/in/sujith-vankayalapati/";
  const githubLink = "https://github.com/Sujith-264/";
  const discordHandle = "_.carnage._";
  const instagramHandle = "/vs._.chowdary";
  const facebookHandle = "profile.php?id=100011805844740&mibextid=ZbWKwL";

  return (
    <section id="connect" className="mb-10">
      <HeadingDivider title="Connect Me" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
        <div className="flex items-center" style={{ color: textColor }}>
          <IconComponent.phone className="mr-2" />
          <span>+91 7075175021</span>
        </div>
        <a href={`mailto:baluvankayalapati@gmail.com`} style={{ color: textColor }}>
          <div className="flex items-center" style={{ color: textColor }}>
            <IconComponent.envelope className="mr-2" />
            <span>baluvankayalapati@gmail.com</span>
          </div>
        </a>
        <a href={linkedinLink} target="_blank" className="flex items-center" style={{ color: textColor }}>
          <IconComponent.linkedin className="mr-2" />
          <span>LinkedIn</span>
        </a>
        <a href={githubLink} target="_blank" className="flex items-center" style={{ color: textColor }}>
          <IconComponent.github className="mr-2" />
          <span>GitHub</span>
        </a>
        <div className="flex items-center" style={{ color: textColor }}>
          <IconComponent.discord className="mr-2" />
          <span>{discordHandle}</span>
        </div>
        <a href={`https://www.instagram.com/${instagramHandle}`} target="_blank" className="flex items-center" style={{ color: textColor }}>
          <IconComponent.instagram className="mr-2" />
          <span>Instagram</span>
        </a>
        <a href={`https://www.facebook.com/${facebookHandle}`} target="_blank" className="flex items-center" style={{ color: textColor }}>
          <IconComponent.facebook className="mr-2" />
          <span>Facebook</span>
        </a>
      </div>
    </section>
  );
};

export default ConnectMe;
