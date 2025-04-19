import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from ".././Navbar/Navbar";
import myImage from "../../image/my.png";
import "./Home.css";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="section">
                <div className="home-detail">
                    <h1>CHAMINDU JAYAHANSA</h1>
                    <h2>
                        I'm&nbsp;
                        <span style={{"--i": 4}} data-text="Coder">
                            Coder
                        </span>
                        <span style={{"--i": 3}} data-text="Coder">
                            Coder
                        </span>
                        <span style={{"--i": 2}} data-text="Desiner">
                            Desiner
                        </span>
                        <span style={{"--i": 1}} data-text="Developer">
                            Developer
                        </span>
                    </h2>
                    <p>i am a developer enginer a and front end and back end desiner</p>
                    <div className="btn-sci">
                        <a href="/btn" className="btn">
                            Douwnload CV{" "}
                        </a>
                        <div className="sci">
                            <a href="/git">
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
        </div>
    );
}
