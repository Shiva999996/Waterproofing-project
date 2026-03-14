import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h2>WaterProof</h2>
          <p>
            Professional waterproofing solutions for homes and
            commercial properties. Protecting your property from
            water damage with trusted expertise.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Terrace Waterproofing</li>
            <li>Bathroom Waterproofing</li>
            <li>Basement Waterproofing</li>
            <li>Wall Crack Repair</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>📍 Mumbai, India</p>

          <p>
            📞 <a href="tel:+919876543210">+91 9876543210</a>
          </p>

          <p>
            ✉ <a href="mailto:info@waterproof.com">
              info@waterproof.com
            </a>
          </p>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2025 WaterProof. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;