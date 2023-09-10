import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {

    return (
        // <!-- --------------- HEADER --------------- -->
        <nav id="header">
            <div className="nav-logo">
                <p className="nav-name">An</p>
                <span>.</span>
            </div>
            <div className="nav-menu" id="myNavMenu">
                <ul className="nav_menu_list">
                    <li className="nav_list">
                        <Link to="/" className="nav-link active-link">
                            Home
                        </Link>
                        <div className="circle"></div>
                    </li>
                    <li className="nav_list">
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                        <div className="circle"></div>
                    </li>
                    <li className="nav_list">
                        <Link to="/project" className="nav-link">
                            Projects
                        </Link>
                        <div className="circle"></div>
                    </li>
                    <li className="nav_list">
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                        <div className="circle"></div>
                    </li>
                </ul>
            </div>
            <div className="nav-button">
                <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
            </div>
            <div className="nav-menu-btn">
                <i className="uil uil-bars" /*onClick={}*/></i>
            </div>
        </nav>
    )
}

export default Navbar