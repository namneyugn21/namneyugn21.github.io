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
const Hotelytics = require("../../assets/Hotelytics.png");
const NamNeedsTODO = require("../../assets/NamNeedsTODO.png");

const ProjectSection = () => {
    return (
        <div className="projects" id="projects">
            <div className="projects_container">
                <p className="projects_title exo2-regular">Project</p>
                <p className="projects_title-comments exo2-light">                    
                    <Typewriter 
                        words={[
                            '// web applications',
                            '// mobile applications',
                            '// software development',
                            '// user experience',
                            '// problem solving',
                            '// creativity',
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
                    <ProjectCards 
                        images={NamNeedsTODO}
                        title="Nam Needs TODO"
                        description="A full-stack task management app built with the MERN stack, featuring a responsive UI, RESTful APIs, and a modular backend architecture. Dockerized for development and deployment, this project was designed to sharpen my skills in building scalable and maintainable applications."
                        link="https://github.com/namneyugn21/NamNeedsTODO.git"
                        skills={[
                          { category: "framework", name: "React.js" },
                          { category: "framework", name: "Express.js" },
                          { category: "tool", name: "Docker" },
                          { category: "framework", name: "Node.js" },
                          { category: "db", name: "MongoDB" },
                          { category: "design", name: "Tailwind CSS" }
                        ]}
                    />
                </div>

                <div className="projects_tuple-index">
                    <ProjectCards 
                        images={Hotelytics}
                        title="Hotelytics"
                        description="Hotelytics helps visitors find the most suitable hotel in Vancouver based on surrounding amenities and also generates a personalized walking tour from the selected hotel to nearby attractions using real street network data."
                        link="https://github.com/namneyugn21/Hotelytics"
                        skills={[
                            { category: "lang", name: "Python" },
                            { category: "tool", name: "Streamlit" },
                            { category: "data", name: "NumPy" },
                            { category: "data", name: "Pandas" },
                            { category: "data", name: "GeoPandas" },
                            { category: "data", name: "Shapely" },
                            { category: "data", name: "OSMnx" },
                            { category: "data", name: "NetworkX" },
                            { category: "data", name: "Scikit-learn" },
                            { category: "data", name: "Folium" }
                        ]}
                    />
                </div>

                <div className="projects_tuple-index">
                    <ProjectCards 
                        images={RoamingApp}
                        title="Roaming App"
                        description="Roaming is a visual storytelling app that helps users capture raw, aesthetic moments and build a digital footprint. Unlike typical photo-sharing platforms focused on selfies, Roaming highlights places, landscapes, and cityscapes—encouraging users to tell stories through their surroundings."
                        link="https://github.com/namneyugn21/Roaming-App"
                        skills={[
                            { category: "framework", name: "React Native" },
                            { category: "framework", name: "Expo" },
                            { category: "tool", name: "Firebase" },
                            { category: "tool", name: "MapLibre" },
                            { category: "tool", name: "Gemini" },
                            { category: "framework", name: "Node.js" },
                            { category: "framework", name: "Express.js" },
                            { category: "tool", name: "Cloudinary" }
                        ]}
                    />
                </div>

                <div className="projects_tuple-index">
                    <ProjectCards 
                        images={BMPViewer}
                        title="BMP Image Viewer"
                        description="BMP Image Editor is a Python GUI application for viewing and modifying BMP images. It allows users to adjust brightness, scale images with nearest-neighbor interpolation, and toggle RGB channels—all within a simple Tkinter interface."
                        link="https://github.com/namneyugn21/BmpImageViewer"
                        skills={[
                            { category: "lang", name: "Python" }, 
                            { category: "tool", name: "Tkinter" }
                        ]}
                    />
                </div>

                <div className="projects_tuple-index">
                    <ProjectCards 
                        images={MySort}
                        title="Sort Visualizer"
                        description="Sort Visualizer is an interactive web application designed to visualize and understand sorting algorithms. Featuring real-time animations, customizable array sizes, gradient bars, and sound effects, it makes learning algorithms engaging and fun."
                        link="https://github.com/namneyugn21/SortVisualizer.git"
                        skills={[
                            { category: "framework", name: "React.js" },
                            { category: "design", name: "CSS" },
                            { category: "lang", name: "TypeScript" }
                        ]}
                    />
                </div>

                <div className="projects_tuple-index">
                    <ProjectCards 
                        images={Realtorest}
                        title="Realtorest"
                        description="A full-stack web application designed for hosting a personal website for realtors. Exploration, sorting, and direct contact functionalities are available for visiting users, while enabling Admin to manage listings and engage with potential buyers effectively, all within a user-friendly, ad-free environment."
                        link="https://github.com/namneyugn21/Realtorest.git"
                        skills={[
                            { category: "lang", name: "HTML" },
                            { category: "design", name: "CSS" },
                            { category: "lang", name: "JavaScript" },
                            { category: "db", name: "PostgreSQL" }
                        ]}
                    />
                </div>

                <div className="projects_tuple-index">
                    <ProjectCards 
                        images={Portfolio}
                        title="Portfolio Website"
                        description="As part of my journey to self-learn React, I'm focusing on designing my website with a minimalistic and aesthetically pleasing approach. My process involves exploring and incorporating various UI components and libraries available online to enhance both functionality and visual appeal."
                        link="https://github.com/namneyugn21/namneyugn21.github.io.git"
                        skills={[
                            { category: "framework", name: "React.js" },
                            { category: "design", name: "Tailwind CSS" }
                        ]}
                    />
                </div>

                <div className="projects_tuple-index">
                    <ProjectCards 
                        images={TokimonWorld}
                        title="Tokimon World"
                        description="Tokimon World is a Spring Boot application that allows users to manage Tokimon cards through a user-friendly JavaFX interface. The application supports full CRUD operations and interacts seamlessly with RESTful APIs, offering a smooth and engaging experience for both data management and user interaction."
                        link="https://github.com/namneyugn21/TokimonWorld.git"
                        skills={[
                            { category: "lang", name: "Java" },
                            { category: "tool", name: "RESTful APIs" },
                            { category: "framework", name: "JavaFX" },
                            { category: "framework", name: "Spring Boot" },
                            { category: "tool", name: "JUnit" }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
