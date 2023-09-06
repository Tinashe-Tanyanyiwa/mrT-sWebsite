import React from 'react';
import './Project.css';
import logo from "./Logo2.png"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleLinkClick = () => {
    setIsNavExpanded(false);
  };

  
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img src={logo} width={120} height={120} alt="logo" />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="#home" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleLinkClick}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={handleLinkClick}>
              Experience
            </a>
          </li>
          <li>
            <a href="#fourIR" onClick={handleLinkClick}>
              FourIR
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
 
// export default Navbar;