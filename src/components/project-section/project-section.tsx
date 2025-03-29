import React from "react";
import "../project-section/project-section.css";
import { Typewriter } from "react-simple-typewriter";
import ProjectCards from "../ui/project-cards/project-cards.tsx";

const Realtorest = require("../../assets/Realtorest.png");
const MySort = require("../../assets/MySort.png");
const Portfolio = require("../../assets/Portfolio.png");
const TokimonWorld = require("../../assets/TokimonWorld.png");
const BMPViewer = require("../../assets/BMPViewer.png");
const RoamingApp = require("../../assets/RoamingApp.png");

const ProjectSection = () => {
    return (
        <div className="projects" id="projects">
            <div className="projects_container">
                <p className="projects_title roboto-slab-light">Project</p>
                <p className="projects_title-comments roboto-slab-light">                    
                    <Typewriter 
                    words={['// web applications', '// mobile applications', '// software development', '// user experience', '// problem solving', '// creativity']}
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
                    <ProjectCards images={RoamingApp} title="Roaming App" description="Roaming is a visual storytelling app that encourages users to capture raw, aesthetic moments and create a digital footprint of their experiences. Unlike traditional photo-sharing platforms that emphasize selfies and social engagement, Roaming is designed to document places, landscapes, cityscapes, and nature, allowing users to tell stories through their surroundings rather than themselves." link="https://github.com/namneyugn21/Roaming-App" />
                </div>
                <div className="projects_tuple-index">
                    <ProjectCards images={BMPViewer} title="BMP Image Viewer" description="BMP Image Editor is a Python GUI application for viewing and modifying BMP images. It allows users to adjust brightness, scale images with nearest-neighbor interpolation, and toggle RGB channels—all within a simple Tkinter interface." link="https://github.com/namneyugn21/BmpImageViewer" />
                </div>
                <div className="projects_tuple-index">
                    <ProjectCards images={MySort} title="Sort Visualizer" description="Sort Visualizer is an interactive web application designed to visualize and understand sorting algorithms. Featuring real-time animations, customizable array sizes, gradient bars, and sound effects, it makes learning algorithms engaging and fun." link="https://github.com/namneyugn21/SortVisualizer.git" />
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