import React from 'react';

import { BackgroundBeams } from "../ui/background-beams.tsx";
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './hero-section.css';

const email = 'nam.vh.nguyen02@gmail.com';

const HeroSection = () => {
    return (
        <div className="introduction_container">
            <div className="introduction_title">
                <p className="introduction_title-name roboto-slab-light">Nam Nguyen</p>
                <p className="introduction_title-job roboto-slab-light">                    
                    <Typewriter 
                    words={['// web developer', '// programmer', '// designer', '// creative', '// problem solver']}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={60}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    />
                </p>
            </div>
            <div className="introduction_line"></div>
            <div className="introduction_description">
                <p className="roboto-slab-light">Xin chào ! (that's "Hello" in Vietnamese)</p>
                <p style={{ paddingTop: '10px' }} className="roboto-slab-light">My name is Nam, and I am a computer science student at Simon Fraser University in Burnaby, British Columbia.</p>
                <p style={{ paddingTop: '10px' }} className="roboto-slab-light">With a concentration in Information Systems and Programming Languages, I am passionate about web development and human-centered computing. I am currently seeking opportunities in software development.</p>
                <p style={{ paddingTop: '10px' }} className="roboto-slab-light">Outside of classroom, I enjoy traveling and taking aesthetic pictures around the city of Vancouver!</p>
                <div className="introduction_menu">
                    <ol className="introduction_menu-list">
                        <li className="roboto-slab-extra-light"><a href="#about" className="introduction_menu-item">about</a></li>
                        <li className="roboto-slab-extra-light"><a href="#skills" className="introduction_menu-item">skills</a></li>
                        <li className="roboto-slab-extra-light"><a href="#projects" className="introduction_menu-item">projects</a></li>
                        <li className="roboto-slab-extra-light"><a href="#resume" className="introduction_menu-item">resume</a></li>
                        <div className="introduction_menu-social">
                            <a href='https://github.com/namneyugn21' target='_blank' rel='noreferer'>
                                <FontAwesomeIcon icon={faGithub} className="introduction_menu-social-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/namneyugn21/" target='_blank' rel='noreferer'>
                                <FontAwesomeIcon icon={faLinkedin} className="introduction_menu-social-icon" />
                            </a>
                            <a href={`mailto:${email}`}>
                                <FontAwesomeIcon icon={faEnvelope} className="introduction_menu-social-icon" />
                            </a>
                        </div>
                    </ol>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
};

export default HeroSection;