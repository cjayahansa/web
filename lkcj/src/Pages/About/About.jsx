import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from ".././Navbar/Navbar";
import About from "./About.css";

export default function Aboutme() {
    return (
        <div>
            <div className="about">
                <h1>About Me </h1>
                <p>
                    Hi! I'm an undergraduate student at the University of Kelaniya, pursuing a degree in Electronics and
                    Computer Science Engineering. I’m passionate about blending hardware and software, with hands-on
                    experience in embedded systems, robotics, and microcontroller programming. I’ve built several
                    exciting projects such as line-following robots using Arduino and ESP32, working with motor drivers,
                    IR sensor arrays, and exploring technologies like PIC microcontrollers, Spring Boot, and Three.js.
                    I'm also comfortable using MicroPython with the Thonny IDE for programming microcontrollers. I love
                    problem-solving, learning new tech, and creating real-world solutions through innovative
                    engineering. Whether it’s coding, circuit designing, or web development—I enjoy every step of the
                    journey. Let’s create something cool together!
                </p>
            </div>
        </div>
    );
}
