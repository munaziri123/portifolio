import React from "react";
import { BsPhone, BsLaptop, BsCpuFill, BsBraces, BsGraphUp } from "react-icons/bs";

function HelpSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact-anchor");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="help-section" id="about-anchor">
      <div className="help-section-inner">
        {/* Section Heading */}
        <div className="section-brush-wrapper">
          <div className="section-brush-img"></div>
          <h2 className="section-heading blue">What can i help ?</h2>
        </div>

        <div className="help-grid">
          {/* Left: Individual Service Cards */}
          <div className="help-services-col">

            {/* 1. AI Integration & Intelligent Systems */}
            <div className="help-card-blue service-item">
              <div className="service-icon teal">
                <BsCpuFill color="white" />
              </div>
              <div>
                <h3 className="service-title">AI Integration &amp; Intelligent Systems</h3>
                <p className="service-desc">
                  I design and integrate AI-powered systems into real-world applications — from
                  Machine Learning models and Deep Learning pipelines to NLP solutions. I help
                  businesses harness AI algorithms to automate, predict, and innovate.
                </p>
              </div>
            </div>

            {/* 2. AI Research & Model Development */}
            <div className="help-card-blue service-item">
              <div className="service-icon purple">
                <BsGraphUp color="white" />
              </div>
              <div>
                <h3 className="service-title">AI Research &amp; Model Development</h3>
                <p className="service-desc">
                  From data preparation to training and evaluating models, I work with a wide
                  range of AI algorithms — supervised, unsupervised, and reinforcement learning —
                  to develop solutions tailored to real problems.
                </p>
              </div>
            </div>

            {/* 3. Software System Design */}
            <div className="help-card-blue service-item">
              <div className="service-icon orange">
                <BsBraces color="white" />
              </div>
              <div>
                <h3 className="service-title">Software System Design &amp; Architecture</h3>
                <p className="service-desc">
                  I design scalable, well-structured software systems — from defining architecture
                  and data flows to building APIs and back-end logic that powers robust,
                  production-ready products.
                </p>
              </div>
            </div>

            {/* 4. Mobile App Development */}
            <div className="help-card-blue service-item">
              <div className="service-icon pink">
                <BsPhone color="white" />
              </div>
              <div>
                <h3 className="service-title">Mobile App Development</h3>
                <p className="service-desc">
                  I build sleek, fast, and user-focused mobile apps using Flutter. From idea to
                  deployment, I bring your app to life on both iOS and Android with responsive
                  design, smooth performance, and AI features where needed.
                </p>
              </div>
            </div>

            {/* 5. Web Development */}
            <div className="help-card-blue service-item" style={{ marginBottom: 0 }}>
              <div className="service-icon yellow">
                <BsLaptop color="white" />
              </div>
              <div>
                <h3 className="service-title">Web Development</h3>
                <p className="service-desc">
                  I design and develop modern, responsive websites and web apps using React and
                  other latest tools — from landing pages to full-stack platforms with clean UI,
                  fast load times, and smart functionality.
                </p>
              </div>
            </div>

          </div>

          {/* Right: Quote Card */}
          <div className="help-card-blue">
            <div className="help-quote-card" style={{ height: "100%" }}>
              <p className="quote-text">
                I am an <strong>AI Engineer &amp; Software Engineer</strong> —
                deepening into <strong>Machine Learning, Deep Learning, NLP</strong>{" "}
                and diverse <strong>AI algorithms</strong> to build systems that
                truly think. I also craft solid <strong>web &amp; mobile
                software</strong> using React.js, Flutter &amp; JavaScript for
                clients who need reliable, well-engineered products.
                Currently pursuing my <strong>Master's degree at ENSIA</strong>,
                expected to graduate in <strong>2029</strong>.
              </p>

              <div>
                <div className="quote-mark">“</div>
                <p className="quote-project-count">
                  10+ real-world projects delivered
                </p>
              </div>

              <button className="help-cta-btn" onClick={scrollToContact} id="help-cta-btn">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpSection;
