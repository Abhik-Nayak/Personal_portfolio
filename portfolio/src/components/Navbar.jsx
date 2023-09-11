import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');

    // const history = useHistory();


    useEffect(() => {
        // Navigate to the "/about" route when the component mounts
        // history.push('/');
      }, []);
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
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
                        {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> */}
                        <Link to="/" className={activeLink === 'home' ? 'nav-link active-link' : 'nav-link'} onClick={() => onUpdateActiveLink('home')}>
                            Home
                        </Link>
                        <div className="circle"></div>
                    </li>
                    <li className="nav_list">
                        <Link to="/about" className={activeLink === 'about' ? 'nav-link active-link' : 'nav-link'} onClick={() => onUpdateActiveLink('about')}>
                            About
                        </Link>
                        <div className="circle"></div>
                    </li>
                    <li className="nav_list">
                        <Link to="/project" className={activeLink === 'project' ? 'nav-link active-link' : 'nav-link'} onClick={() => onUpdateActiveLink('project')}>
                            Projects
                        </Link>
                        <div className="circle"></div>
                    </li>
                    <li className="nav_list">
                        <Link to="/contact" className={activeLink === 'contact' ? 'nav-link active-link' : 'nav-link'} onClick={() => onUpdateActiveLink('contact')}>
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