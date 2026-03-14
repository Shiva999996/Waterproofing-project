import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="header">

      {/* LOGO */}
      <div className="logo">
        <div className="logo-box">WP</div>
        <div className="logo-text">
          <h2>WaterProof</h2>
          <span>Construction Solutions</span>
        </div>
      </div>

      {/* HAMBURGER */}
      <div 
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* NAVBAR */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>

        <div className="dropdown">
          <span
            className="dropdown-title"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Services
          </span>

          <div className={`dropdown-menu ${dropdownOpen ? "active" : ""}`}>
            <Link to="/services" onClick={closeMenu}>Terrace Waterproofing</Link>
            <Link to="/services" onClick={closeMenu}>Bathroom Waterproofing</Link>
            <Link to="/services" onClick={closeMenu}>Basement Waterproofing</Link>
            <Link to="/projects" onClick={closeMenu}>Water Tank Waterproofing</Link>
            <Link to="/projects" onClick={closeMenu}>External wall coating</Link>
            <Link to="/projects" onClick={closeMenu}>Material supply</Link>
          </div>
        </div>

        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </nav>

      {/* BUTTON */}
      <Link to="/contact" className="header-btn" onClick={closeMenu}>
        Get Free Inspection
      </Link>

    </header>
  );
}

export default Header;