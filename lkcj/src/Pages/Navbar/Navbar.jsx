import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contac from "../Contac/Contac";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo-container">
                <h1 href="/" className="navbar-logo">
                    LKCJ
                </h1>
            </div>
            <div>
                <a href="/" className="navbar-c">
                    Home
                </a>
                <a href="/About" className="navbar-c">
                    About
                </a>
                <a href="/Contac" className="navbar-c">
                    Contac
                </a>
                <a href="/Blog" className="navbar-c">
                    Blog
                </a>
            </div>
        </div>
    );
}
