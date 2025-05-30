import React from "react";

import "../resume-section/resume-section.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Resume = require("../../assets/Nam_Nguyen_Resume.png");

const ResumeSection = () => {
    return (
        <div className="resume__container" id="resume">
            <div className="resume__container-title">
                <p className="resume-title exo2-regular">Resume</p>
                <p className="resume-title-comment exo2-light">// myResume</p>
            </div>
            <div className="projects_line"></div>
            <div className="resume__container-content">
                <div className="resume__container-content-left">
                  <div className="resume__container-pfp-wrapper">
                    <img 
                      src={require("../../assets/pfp.jpeg")} 
                      alt="Nam Nguyen" 
                      className="resume__container-pfp"
                    />
                    <p className="exo2-light">
                      Driven by a passion for development and human-centered computing, I’m currently seeking a co-op opportunity in software or web development.
                    </p>
                    <p className="exo2-light">
                      Download my resume to learn more about my expertise and how I can contribute to your team with both technical and creative skills.
                    </p>
                  </div>
                  <a 
                      href="/resources/Nam_Nguyen_Resume.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="resume__container-content-button-link exo2-light">
                    <button 
                      className="resume__container-content-button">
                      <FontAwesomeIcon icon={faDownload} className="resume__container-content-button-icon" />
                          <p className="exo2-light">Download Resume</p>
                    </button>
                  </a>
                </div>
                <div className="resume__container-content-right">
                    <img src={Resume} alt="resume" className="resume__container-content-right-image resume-image"></img>
                </div>
            </div>
        </div>
    );
}

export default ResumeSection;