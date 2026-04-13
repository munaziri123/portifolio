import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.svg";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const scrollToSection = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar-new${scrolled ? " scrolled" : ""}`}>
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Muna Group" />
        </Link>

        {/* Centered pill nav */}
        <div className="navbar-center">
          <Link
            to="/"
            className={`nav-pill-link${isActive("/") ? " active" : ""}`}
            onClick={scrollToTop}
          >
            Home
          </Link>
          <button
            className="nav-pill-link"
            onClick={() => scrollToSection("skills-section")}
          >
            Skills
          </button>
          <button
            className="nav-pill-link"
            onClick={() => scrollToSection("about-anchor")}
          >
            About
          </button>
          <button
            className="nav-pill-link"
            onClick={() => scrollToSection("projects-anchor")}
          >
            Work
          </button>
        </div>

        {/* Email badge */}
        <a href="mailto:munaziriemail@gmail.com" className="navbar-email-badge">
          munaziriemail@gmail.com
        </a>

        {/* Hamburger */}
        <div
          className="navbar-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu${mobileOpen ? " open" : ""}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>
          ✕
        </button>
        <Link
          to="/"
          className="mobile-nav-link"
          onClick={scrollToTop}
        >
          Home
        </Link>
        <span
          className="mobile-nav-link"
          onClick={() => scrollToSection("skills-section")}
        >
          Skills
        </span>
        <span
          className="mobile-nav-link"
          onClick={() => scrollToSection("about-anchor")}
        >
          About
        </span>
        <span
          className="mobile-nav-link"
          onClick={() => scrollToSection("projects-anchor")}
        >
          Work
        </span>
        <a
          href="mailto:munaziriemail@gmail.com"
          className="mobile-nav-link"
          style={{ fontSize: "1rem", color: "#6B7280" }}
          onClick={() => setMobileOpen(false)}
        >
          munaziriemail@gmail.com
        </a>
        <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
          <a href="https://github.com/munaziri123" target="_blank" rel="noreferrer" className="contact-social-link">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/munaziri-josue-b83282304" target="_blank" rel="noreferrer" className="contact-social-link">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/muna_ziri" target="_blank" rel="noreferrer" className="contact-social-link">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
