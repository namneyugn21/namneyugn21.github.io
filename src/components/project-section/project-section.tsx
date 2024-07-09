import React from "react";
import "../project-section/project-section.css";
import { Typewriter } from "react-simple-typewriter";
import ProjectCards from "../ui/project-cards/project-cards.tsx";

const Realtorest = require("../../assets/Realtorest.png");

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
                    <ProjectCards images={Realtorest} title="Realtorest" description="A full-stack web application designed for hosting a personal website for realtors. Exploration, sorting, and direct contact functionalities are available for visiting users, while enabling Admin to manage listings and engage with potential buyers effectively, all within a user-friendly, ad-free environment." link="https://github.com/namneyugn21/Realtorest.git" />
                </div>

            </div>
        </div>
    );
}

export default ProjectSection;