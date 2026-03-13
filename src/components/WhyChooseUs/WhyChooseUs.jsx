import React from "react";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why">

      <div className="why-container">

        <div className="why-text">
          <h4>Why Choose Us</h4>

          <h2>
            Trusted Waterproofing Experts
          </h2>

          <p>
            We provide reliable waterproofing services using advanced
            techniques and high-quality materials. Our experienced team
            ensures long-lasting protection for your property.
          </p>

          <div className="why-features">

            <div className="feature">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>

            <div className="feature">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="feature">
              <h3>100%</h3>
              <p>Customer Satisfaction</p>
            </div>

            <div className="feature">
              <h3>5</h3>
              <p>Years Warranty</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;