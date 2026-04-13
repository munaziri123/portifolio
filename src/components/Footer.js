import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-new">
      <div className="footer-inner">
        <div className="footer-brand">MUNAZIRI Josue · Muna Group</div>
        <div className="footer-copy">
          © {year} — Designed &amp; Developed by MUNAZIRI Josue
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/munaziri123"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/munaziri-josue-b83282304"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/muna_ziri"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
            aria-label="Instagram"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
