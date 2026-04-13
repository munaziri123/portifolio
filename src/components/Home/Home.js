import React from "react";
import HeroSection from "./HeroSection";
import HelpSection from "./HelpSection";
import SkillsSection from "./SkillsSection";
import TechBanner from "./TechBanner";
import ProjectsNew from "../Projects/ProjectsNew";
import ContactSection from "../ContactSection";

function Home() {
  return (
    <main>
      <HeroSection />
      <HelpSection />
      <SkillsSection />
      <TechBanner />
      <ProjectsNew />
      <ContactSection />
    </main>
  );
}

export default Home;
