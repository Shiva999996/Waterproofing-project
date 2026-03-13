import React from "react";
import "./Services.css";
import terrace from "../../assets/images/terrace.jpg";
import bathroom from "../../assets/images/bathroom.jpg";
import basement from "../../assets/images/basement.jpg";

function Services() {
  return (
    <section className="services">

      <h2>Our Services</h2>
      <p>Comprehensive waterproofing solutions for all your needs</p>

      <div className="services-container">

        <div className="service-card">
          <img src={terrace} alt="Terrace Waterproofing"/>
          <div className="service-content">
            <h3>Terrace Waterproofing</h3>
            <p>
              Complete terrace waterproofing with heat-reflective coating
              and long-lasting protection.
            </p>
          </div>
        </div>

        <div className="service-card">
          <img src={bathroom} alt="Bathroom Waterproofing"/>
          <div className="service-content">
            <h3>Bathroom Waterproofing</h3>
            <p>
              Expert bathroom waterproofing preventing seepage and ensuring
              long-term durability.
            </p>
          </div>
        </div>

        <div className="service-card">
          <img src={basement} alt="Basement Waterproofing"/>
          <div className="service-content">
            <h3>Basement Waterproofing</h3>
            <p>
              Comprehensive basement protection against water infiltration
              and moisture.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Services;