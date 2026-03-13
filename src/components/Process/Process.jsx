import React from "react";
import "./Process.css";

function Process() {
  const steps = [
    {
      number: "01",
      title: "Site Visit",
      desc: "Free on-site inspection and problem assessment"
    },
    {
      number: "02",
      title: "Inspection & Quotation",
      desc: "Detailed analysis with transparent pricing"
    },
    {
      number: "03",
      title: "Application",
      desc: "Professional execution with quality materials"
    },
    {
      number: "04",
      title: "Warranty Support",
      desc: "Written warranty with after-service care"
    }
  ];

  return (
    <section className="process">
   <hr color="black" />
      <div className="process-header">
        <h2>Our Process</h2>
        <p>Simple, transparent, and professional approach to waterproofing</p>
      </div>

      <div className="process-container">
        {steps.map((step, index) => (
          <div className="process-card" key={index}>

            <div className="process-number">
              {step.number}
            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

          </div>
        ))}
      </div>

      <div className="process-cta">

        <h3>
          Ready to protect your property from water damage?
        </h3>

        <button className="cta-btn">
          Schedule Free Inspection
        </button>

      </div>

    </section>
  );
}

export default Process;