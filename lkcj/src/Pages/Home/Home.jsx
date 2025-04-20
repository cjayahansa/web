import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from ".././Navbar/Navbar";
import myImage from "../../image/my.png";
import "./Home.css";

export default function Home() {
    return (
        <div>
            <div className="section">
                <div className="home-detail">
                    <h1>CHAMINDU JAYAHANSA</h1>
                    <h2>
                        I'm&nbsp;
                        <span style={{"--i": 4}} data-text="Full-Stack Developer">
                            Full-Stack Developer
                        </span>
                        <span style={{"--i": 3}} data-text="Embedded Systems Engineer">
                            Embedded Systems Engineer
                        </span>
                        <span style={{"--i": 2}} data-text="PCB & Circuit Designer">
                            PCB & Circuit Designer
                        </span>
                        <span style={{"--i": 1}} data-text=" Network Designer">
                            Network Designer
                        </span>
                    </h2>
                    <p>
                        I’m a multidisciplinary tech enthusiast with a passion for both hardware and software. With a
                        strong foundation in electronics and computer science, I bridge the gap between physical systems
                        and digital innovation. My skills range from circuit design to cloud-deployed full-stack
                        applications — and I make it all look good with clean, professional design.
                    </p>
                    <div className="btn-sci">
                        <a href="/btn" className="btn">
                            Download CV
                        </a>
                        <div className="sci">
                            <a href="https://github.com/cjayahansa">
                                <i className="bx bxl-github"></i>
                            </a>
                            <a href="/li">
                                <i className="bx bxl-linkedin-square"></i>
                            </a>
                            <a href="/dis">
                                <i className="bx bxl-discord-alt"></i>
                            </a>
                            <a href="/you">
                                <i className="bx bxl-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="home-img">
                    <div className="img-box">
                        <div className="img-item">
                            <img src={myImage} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-section">
                <div className="bottom-align">
                    <div className="bottom-text">
                        <p>
                            Featured<spam> Projects</spam>
                        </p>
                    </div>
                    <hr class="custom-line" />
                </div>
            </div>
        </div>
    );
}
// ("use client");

// import {useEffect} from "react";
// import Navbar from ".././Navbar/Navbar";
// import myImage from "../../image/my.png";
// import "./Home.css";

// export default function Home() {
//     // Create particles on component mount
//     useEffect(() => {
//         const particlesContainer = document.createElement("div");
//         particlesContainer.className = "particles";

//         // Create 20 particle elements
//         for (let i = 0; i < 20; i++) {
//             const particle = document.createElement("div");
//             particle.className = "particle";
//             particlesContainer.appendChild(particle);
//         }

//         // Add particles to the section
//         const section = document.querySelector(".section");
//         section.appendChild(particlesContainer);

//         // Clean up on unmount
//         return () => {
//             if (section && particlesContainer) {
//                 section.removeChild(particlesContainer);
//             }
//         };
//     }, []);

//     return (
//         <div>
//             <Navbar />
//             <div className="section">
//                 <div className="home-detail">
//                     <h1>CHAMINDU JAYAHANSA</h1>
//                     <h2>
//                         I'm&nbsp;
//                         <span style={{"--i": 4}} data-text="Coder">
//                             Coder
//                         </span>
//                         <span style={{"--i": 3}} data-text="Coder">
//                             Coder
//                         </span>
//                         <span style={{"--i": 2}} data-text="Designer">
//                             Designer
//                         </span>
//                         <span style={{"--i": 1}} data-text="Developer">
//                             Developer
//                         </span>
//                     </h2>
//                     <p>I am a software engineer specializing in full-stack development and UI/UX design.</p>
//                     <div className="btn-sci">
//                         <a href="/resume.pdf" className="btn" download>
//                             Download CV
//                         </a>
//                         <div className="sci">
//                             <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//                                 <i className="bx bxl-github"></i>
//                             </a>
//                             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                                 <i className="bx bxl-linkedin-square"></i>
//                             </a>
//                             <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
//                                 <i className="bx bxl-discord-alt"></i>
//                             </a>
//                             <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
//                                 <i className="bx bxl-youtube"></i>
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="home-img">
//                     <div className="img-box">
//                         <div className="img-item">
//                             <img src={myImage || "/placeholder.svg"} alt="Chamindu Jayahansa" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
