import React from "react";

import HeroSection from "../src/components/hero-section/hero-section.tsx";
import ProjectSection from "./components/project-section/project-section.tsx";
import ResumeSection from "./components/resume-section/resume-section.tsx";

import "./App.css";

function App() {
    return (
        <>
            <HeroSection />
            <ProjectSection />
            <ResumeSection />
        </>
    );
}

export default App;


