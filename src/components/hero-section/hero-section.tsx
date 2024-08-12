import React from 'react';

import { BackgroundBeams } from "../ui/background-beams.tsx";
import { Typewriter } from 'react-simple-typewriter';

import './hero-section.css';

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
                <p className="roboto-slab-light">My name is Nam, and I am a computer science student at Simon Fraser University in Burnaby, British Columbia.</p>
                <p className="roboto-slab-light">With a concentration in Information Systems and Programming Languages, I am passionate about web development and human-centered computing. I am currently seeking opportunities as a front-end developer or web developer.</p>
                <p className="roboto-slab-light">Outside of classroom, I enjoy traveling and taking aesthetic pictures around the city of Vancouver!</p>
            </div>
            <div className="introduction_menu">
                <ol className="introduction_menu-list">
                    <li className="roboto-slab-extra-light"><a href="#about" className="introduction_menu-item">about</a></li>
                    <li className="roboto-slab-extra-light"><a href="#projects" className="introduction_menu-item">projects</a></li>
                    <li className="roboto-slab-extra-light"><a href="#resume" className="introduction_menu-item">resume</a></li>
                    <li className="roboto-slab-extra-light"><a href="#skills" className="introduction_menu-item">skills</a></li>
                    <li className="roboto-slab-extra-light"><a href="#contact" className="introduction_menu-item">contact</a></li>
                </ol>
            </div>
            <BackgroundBeams />
        </div>
    );
};

export default HeroSection;