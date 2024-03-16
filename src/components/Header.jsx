import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        Shekhar
      </a>
      <i className="bx bx-menu" id="menu-icon" />
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills </Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Project</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
