import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <div className="logo-box">WP</div>

        <div className="logo-text">
          <h2>WaterProof</h2>
          <span>Construction Solutions</span>
        </div>
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <div className="dropdown">
          <Link to="/services">Services</Link>
        </div>

        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <button className="header-btn" >
        Get Free Inspection
      </button>

    </header>
  );
}

export default Header;