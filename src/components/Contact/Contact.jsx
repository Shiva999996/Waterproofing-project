import React, { useState } from "react";
import "./Contact.css";
import contactBg from "../../assets/images/hero1.jpg";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    console.log(formData);
  };

  return (
    <div className="contact-page">

      {/* CONTAINER 1 - FULL IMAGE */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="contact-overlay">
          <h1>Contact Us</h1>
        </div>
      </section>

      {/* CONTAINER 2 & 3 */}
      <section className="contact-container">

        {/* GET IN TOUCH */}
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            Have waterproofing problems? Contact our experts today.
          </p>

          <div className="info-box">
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Email:</strong> info@waterproofing.com</p>
            <p><strong>Address:</strong> Pune, Maharashtra</p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="contact-form">

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option>Roof Waterproofing</option>
              <option>Terrace Waterproofing</option>
              <option>Basement Waterproofing</option>
              <option>Bathroom Waterproofing</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Send Message</button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Contact;