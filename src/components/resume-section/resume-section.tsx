import React from "react";

import "../resume-section/resume-section.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Resume = require("../../assets/Co-op_Resume.png");

const ResumeSection = () => {
    return (
        <div className="resume__container" id="resume">
            <div className="resume__container-title">
                <p className="resume-title roboto-slab-light">Resume</p>
                <p className="resume-title-comment roboto-slab-light">// myResume</p>
            </div>
            <div className="projects_line"></div>
            <div className="resume__container-content">
                <div className="resume__container-content-left">
                    <p className="roboto-slab-light">
                        Download my resume to learn more about my expertise and how I can contribute to your team with both technical and creative skills.
                    </p>
                    <br></br>
                    <button className="resume__container-content-button">
                        <FontAwesomeIcon icon={faDownload} className="resume__container-content-button-icon" />
                        <a 
                        href="/resources/Co-op_Resume.pdf" 
                        target="_blank" 
                        rel="noreferrer" 
                        download="Co-op_Resume.pdf"
                        className="resume__container-content-button-link roboto-slab-light">
                            Download Resume
                        </a>
                    </button>
                </div>
                <div className="resume__container-content-right">
                    <img src={Resume} alt="resume" className="resume__container-content-right-image resume-image"></img>
                </div>
            </div>
        </div>
    );
}

export default ResumeSection;