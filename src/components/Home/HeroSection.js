import React from "react";
import myImg from "../../Assets/muna.jpg";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const skills = [
  { label: "AI / ML Engineering", percent: 88 },
  { label: "AI System Integration", percent: 85 },
  { label: "Web & Mobile Dev", percent: 80 },
];

function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact-anchor");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-inner">

          {/* ── LEFT: Dark Panel with Intro ── */}
          <div className="hero-left fade-in">
            {/* Decorative top-left brush accent */}
            <div className="hero-brush-accent"></div>

            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">
              Munaziri<br />
              <span className="hero-name-accent">Josue</span>
            </h1>

            <p className="hero-role-tag">— AI Engineer · Software Engineer · Problem Solver</p>

            <p className="hero-subtext">
              <strong>AI Engineer &amp; Software Engineer</strong> — Rwandan
              student at the{" "}
              <strong>National School of Artificial Intelligence (ENSIA)</strong>{" "}
              in Algeria. I specialise in building and integrating intelligent
              systems powered by <strong>Machine Learning, Deep Learning,
              NLP</strong> and diverse <strong>AI algorithms</strong>.
              I also engineer robust <strong>web &amp; mobile software</strong>{" "}
              for clients who need reliable, production-ready products.
              Currently pursuing my Master's degree, expected to graduate in{" "}
              <strong>2029</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <button
                className="hero-btn-primary"
                id="hero-cta-btn"
                onClick={scrollToContact}
              >
                Hire Me Now
              </button>
              <a
                href="/cv.pdf"
                download
                className="hero-btn-outline"
                id="download-cv-btn"
              >
                Portfolio
              </a>
            </div>

            {/* Social Icons */}
            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/munaziri-josue-b83282304"
                target="_blank"
                rel="noreferrer"
                className="hero-social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/muna_ziri"
                target="_blank"
                rel="noreferrer"
                className="hero-social-icon"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://github.com/munaziri123"
                target="_blank"
                rel="noreferrer"
                className="hero-social-icon"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </div>

            {/* Skill Bars */}
            <div className="hero-skill-bars">
              <p className="hero-skill-title">Skills</p>
              {skills.map((s) => (
                <div className="hero-skill-item" key={s.label}>
                  <div className="hero-skill-header">
                    <span className="hero-skill-label">{s.label}</span>
                    <span className="hero-skill-pct">{s.percent}%</span>
                  </div>
                  <div className="hero-skill-track">
                    <div
                      className="hero-skill-fill"
                      style={{ width: `${s.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* end .hero-left */}

          {/* ── RIGHT: Portrait Photo ── */}
          <div className="hero-right fade-in">
            <div className="hero-img-accent"></div>
            <img
              src={myImg}
              alt="Munaziri Josue"
              className="hero-portrait-img"
            />
          </div>

        </div>
        {/* end .hero-inner */}
      </section>

      {/* Stats Row */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-number">+3</div>
          <div className="stat-label">Years of experience</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">+10</div>
          <div className="stat-label">Real projects</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">+10</div>
          <div className="stat-label">Satisfied clients</div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
