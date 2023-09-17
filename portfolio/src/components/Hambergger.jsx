import React, { useState } from 'react';
import './ham.css'; // Import your CSS file

function Hambergger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        {/* <i className={`uil uil-bars burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} ></i> */}
      <button className={` burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></button>
      <div className={`background ${isOpen ? 'open' : ''}`}></div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <nav>
          <a style={{ animationDelay: '0.2s' }}>About</a>
          <a style={{ animationDelay: '0.3s' }}>Portfolio</a>
          <a style={{ animationDelay: '0.4s' }}>Services</a>
          <a style={{ animationDelay: '0.5s' }}>Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Hambergger;
