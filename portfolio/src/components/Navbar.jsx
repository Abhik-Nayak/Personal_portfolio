import React, { useEffect, useState } from 'react'
import { Link ,useNavigate,useLocation} from "react-router-dom";
import Hambergger from './Hambergger';
const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('home');
    
    const { hash, pathname, search } = location;
    useEffect(() => {
        // navigate(`${pathname}`);
        console.log(hash, typeof(pathname), search)
        if(pathname === '/project'){
            setActiveLink('project')
        }
        else if(pathname === '/about'){
            setActiveLink('about')
        }
        else if(pathname === '/contact'){
            setActiveLink('contact')
        }
        else if(pathname.includes('/projectdetails/')){
            setActiveLink('project')
        }
        else{

        }
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
                <Hambergger/>
            </div>
        </nav>
    )
}

export default Navbar