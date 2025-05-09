import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contac from "./Pages/Contac/Contac";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/About" element={<About />}></Route>
                    <Route path="/Contac" element={<Contac />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
