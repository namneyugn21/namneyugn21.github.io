import React from "react";
import "./App.css";

import { BackgroundBeams } from "./components/ui/background-beams.tsx";
import { Typewriter } from 'react-simple-typewriter';

function App() {
    return (
        <div className="App">
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
                    <p className="roboto-slab-light">With a concentration in Information Systems and Programming Languages, I am passionate about web development and databases. I am currently seeking opportunities as a front-end developer or web developer.</p>
                    <p className="roboto-slab-light">Outside of classroom, I enjoy traveling and taking aesthetic pictures around the city of Vancouver!</p>
                </div>
                <div className="introduction_menu">
                    <ol class="introduction_menu-list">
                        <li className="roboto-slab-extra-light"><span className="introduction_menu-item">about</span></li>
                        <li className="roboto-slab-extra-light"><span className="introduction_menu-item">projects</span></li>
                        <li className="roboto-slab-extra-light"><span className="introduction_menu-item">resume</span></li>
                        <li className="roboto-slab-extra-light"><span className="introduction_menu-item">skills</span></li>
                        <li className="roboto-slab-extra-light"><span className="introduction_menu-item">contact</span></li>
                    </ol>
                </div>
                <BackgroundBeams />
            </div>
        </div>
    );
}

export default App;


