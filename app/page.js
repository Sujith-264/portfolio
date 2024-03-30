"use client";

import { WelcomeSection, AboutSection, CertificateSection, ProjectsSection } from "app/sections";
import Interests from "./sections/intrests";
import ConnectMe from "./sections/connect";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<Interests/>
			<CertificateSection />
			<ConnectMe/>
		</div>
	);
}
