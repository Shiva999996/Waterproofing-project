import React from "react";
import "./About.css";
import aboutBg from "../../assets/images/hero1.jpg";

function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION WITH FULL BACKGROUND IMAGE */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="about-overlay">
          <h1>About Us</h1>
          <p>Building Trust, One Project at a Time</p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-container">

        <div className="about-text">
          <h2>Our Story</h2>

          <p>
            Established in 2015, WaterProof Construction Solutions has been at
            the forefront of providing premium waterproofing services across
            Mumbai and surrounding areas. With over 10 years of experience,
            we have successfully completed more than 1000 residential and
            commercial projects.

            Our journey began with a simple mission: to protect properties
            from water damage using the best materials and techniques
            available in the industry. Today, we are proud to be one of the
            most trusted names in waterproofing solutions.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="Waterproofing Work"
          />
        </div>

      </section>

      {/* MISSION SECTION */}
      <section className="mission-section">

        <div className="mission-box">
          <h3>Our Mission</h3>
          <p>
            To deliver high-quality waterproofing solutions that protect
            buildings and increase their durability and value.
          </p>
        </div>

        <div className="mission-box">
          <h3>Our Vision</h3>
          <p>
            To become a trusted leader in waterproofing services by providing
            reliable solutions and excellent customer satisfaction.
          </p>
        </div>

        <div className="mission-box">
          <h3>Our Core Values</h3>
          <p>
            Quality workmanship, customer trust, innovation, and commitment
            to completing every project with precision.
          </p>
        </div>

      </section>

    </div>
  );
}

export default About;