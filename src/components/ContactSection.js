import React, { useState } from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo: just show success message
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="contact-section" id="contact-anchor">
      <div className="contact-inner">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <h2>
            Let's Work <span className="blue">Together</span>
          </h2>
          <p>
            I'm always open to discussing new projects, creative ideas or opportunities
            to be part of your visions. Feel free to reach out!
          </p>

          <div className="contact-info-item">
            <div className="contact-icon">
              <MdEmail />
            </div>
            <div>
              <p className="contact-label">Email</p>
              <p className="contact-value">munaziriemail@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <MdLocationOn />
            </div>
            <div>
              <p className="contact-label">Location</p>
              <p className="contact-value">Algeria / Rwanda</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <MdPhone />
            </div>
            <div>
              <p className="contact-label">Availability</p>
              <p className="contact-value">Open for freelance &amp; full-time</p>
            </div>
          </div>

          <div className="contact-social-bar">
            <a
              href="https://github.com/munaziri123"
              target="_blank"
              rel="noreferrer"
              className="contact-social-link"
              aria-label="GitHub"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/munaziri-josue-b83282304"
              target="_blank"
              rel="noreferrer"
              className="contact-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/muna_ziri"
              target="_blank"
              rel="noreferrer"
              className="contact-social-link"
              aria-label="Instagram"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form-card">
          <h3>Send a Message</h3>
          {sent && (
            <div
              style={{
                background: "rgba(255,255,255,0.2)",
                borderRadius: "12px",
                padding: "12px 16px",
                color: "white",
                marginBottom: "16px",
                fontWeight: 600,
              }}
            >
              ✓ Message sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                id="contact-name"
              />
            </div>
            <div className="form-group">
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                id="contact-email"
              />
            </div>
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                id="contact-subject"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-textarea"
                name="message"
                placeholder="Your Message..."
                value={form.message}
                onChange={handleChange}
                required
                id="contact-message"
              />
            </div>
            <button type="submit" className="btn-send" id="contact-send-btn">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
