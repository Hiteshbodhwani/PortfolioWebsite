import React from 'react';
import { NavLink } from 'react-router-dom';
import './StylingFiles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">HITESH.DEV</div>

      <ul className="nav-menu">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/experience">Experience</NavLink></li>
        
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
