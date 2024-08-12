import React from "react";
import "../project-section/project-section.css";
import { Typewriter } from "react-simple-typewriter";
import ProjectCards from "../ui/project-cards/project-cards.tsx";

const Realtorest = require("../../assets/Realtorest.png");
const Petinder = require("../../assets/Petinder.png");
const Portfolio = require("../../assets/Portfolio.png");
const TokimonWorld = require("../../assets/TokimonWorld.png");

const ProjectSection = () => {
    return (
        <div className="projects" id="projects">
            <div className="projects_container">
                <p className="projects_title roboto-slab-light">Project</p>
                <p className="projects_title-comments roboto-slab-light">                    
                    <Typewriter 
                    words={['// HTML', '// CSS', '// Javascript', '// Spring', '// PostgreSQL'
                        , '// Docker', '// Python'
                    ]}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={60}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    />
                </p>
            </div>
            <div className="projects_line"></div>
            <div className="projects_tuple">
                <div className="projects_tuple-index">
                    <ProjectCards images={Petinder} title="Petinder" description="Petinder is an innovative web application designed to help animal lovers connect with pets available for adoption at local shelters. Drawing inspiration from the popular dating app Tinder, Petinder offers a user-friendly interface that allows potential pet adopters to discover, explore, and swipe through profiles of adoptable pets." link="https://github.com/namneyugn21/Petinder.git" />
                </div>
                <div className="projects_tuple-index">
                    <ProjectCards images={Realtorest} title="Realtorest" description="A full-stack web application designed for hosting a personal website for realtors. Exploration, sorting, and direct contact functionalities are available for visiting users, while enabling Admin to manage listings and engage with potential buyers effectively, all within a user-friendly, ad-free environment." link="https://github.com/namneyugn21/Realtorest.git" /> 
                </div>
                <div className="projects_tuple-index">
                    <ProjectCards images={Portfolio} title="Portfolio Website" description="As part of my journey to self-learn React, I'm focusing on designing my website with a minimalistic and aesthetically pleasing approach. My process involves exploring and incorporating various UI components and libraries available online to enhance both functionality and visual appeal." link="https://github.com/namneyugn21/namneyugn21.github.io.git" /> 
                </div>
                <div className="projects_tuple-index">
                    <ProjectCards images={TokimonWorld} title="Tokimon World" description="Tokimon World is a Spring Boot application that allows users to manage Tokimon cards through a user-friendly JavaFX interface. The application supports full CRUD operations and interacts seamlessly with RESTful APIs, offering a smooth and engaging experience for both data management and user interaction." link="https://github.com/namneyugn21/TokimonWorld.git" /> 
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;