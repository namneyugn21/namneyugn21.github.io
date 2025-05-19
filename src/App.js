import React from "react";

import HeroSection from "../src/components/hero-section/hero-section.tsx";
import ProjectSection from "./components/project-section/project-section.tsx";
import ResumeSection from "./components/resume-section/resume-section.tsx";

import "./App.css";
import SkillsSection from "./components/skills-section/skills-section.tsx";
import { FloatingNav } from "./components/ui/floating-navbar.tsx";

function App() {
    const navItems = [
      {
        name: "Home",
        link: "#",
      },
      {
        name: "Skills",
        link: "#skills",
      },
      {
        name: "Projects",
        link: "#projects",
      },
      {
        name: "Resume",
        link: "#resume",
      },
    ];
    return (
        <>
            <FloatingNav navItems={navItems} />
            <HeroSection />
            <SkillsSection />
            <ProjectSection />
            <ResumeSection />
        </>
    );
}

export default App;


