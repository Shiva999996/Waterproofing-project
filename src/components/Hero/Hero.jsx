import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import heroBg from "../../assets/images/hero1.jpg";

function Hero() {

  const navigate = useNavigate();

  const openWhatsApp = () => {
    window.open("https://wa.me/919876543210", "_blank");
  };

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">

        <div className="hero-content">

          <h1>
            Professional <br />
            Waterproofing Solutions <br />
            in <span>Your City</span>
          </h1>

          <p>
            Terrace | Bathroom | Basement Waterproofing with Written Warranty
          </p>

          <div className="hero-buttons">

            <button
              className="inspect-btn"
              onClick={goToContact}
            >
              Get Free Site Inspection
            </button>

            <button
              className="whatsapp-btn"
              onClick={openWhatsApp}
            >
              WhatsApp Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;