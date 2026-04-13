import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import {
  SiFlutter,
  SiDart,
  SiHtml5,
  SiMysql,
  SiAppwrite,
  SiCss3,
  SiPython,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";

const hardSkills = [
  // ================= CORE PROGRAMMING =================
  {
    name: "Python",
    icon: <SiPython color="#3776AB" />,
    level: "Semi-pro",
    percent: 65,
    desc: "Primary language for AI, machine learning, and data-driven applications.",
  },
  {
    name: "Dart",
    icon: <SiDart color="#0175C2" />,
    level: "Semi-pro",
    percent: 65,
    desc: "Programming language used with Flutter for building mobile apps.",
  },
  {
    name: "JavaScript",
    icon: <DiJavascript1 color="#F7DF1E" />,
    level: "Intermediate",
    percent: 55,
    desc: "Enables interactive web pages and dynamic UI logic.",
  },
  {
    name: "C++",
    icon: <CgCPlusPlus color="#00599C" />,
    level: "Junior",
    percent: 35,
    desc: "High-performance programming for systems and algorithms.",
  },

  // ================= AI / ML =================
  {
    name: "Machine Learning",
    icon: <SiTensorflow color="#FF6F00" />,
    level: "Intermediate",
    percent: 60,
    desc: "Building predictive models using supervised and unsupervised learning.",
  },
  {
    name: "Deep Learning",
    icon: <SiPytorch color="#EE4C2C" />,
    level: "Intermediate",
    percent: 55,
    desc: "Designing neural networks for complex pattern recognition tasks.",
  },
  {
    name: "NLP",
    icon: <SiPython color="#4B8BBE" />,
    level: "Intermediate",
    percent: 55,
    desc: "Working with text data: sentiment analysis, chatbots, and language models.",
  },
  {
    name: "AI Integration",
    icon: <SiAppwrite color="#FD366E" />,
    level: "Semi-pro",
    percent: 65,
    desc: "Integrating AI models into real-world apps and production systems.",
  },

  // ================= WEB & MOBILE =================
  {
    name: "React",
    icon: <DiReact color="#61DAFB" />,
    level: "Semi-pro",
    percent: 65,
    desc: "Building dynamic, component-based web interfaces.",
  },
  {
    name: "Flutter",
    icon: <SiFlutter color="#54C5F8" />,
    level: "Semi-pro",
    percent: 65,
    desc: "Cross-platform mobile app development with smooth UI.",
  },
  {
    name: "HTML",
    icon: <SiHtml5 color="#E34F26" />,
    level: "Pro",
    percent: 85,
    desc: "Structuring modern web pages.",
  },
  {
    name: "CSS",
    icon: <SiCss3 color="#264DE4" />,
    level: "Intermediate",
    percent: 55,
    desc: "Styling and layout for responsive design.",
  },

  // ================= BACKEND & DATABASE =================
  {
    name: "MySQL",
    icon: <SiMysql color="#00758F" />,
    level: "Intermediate",
    percent: 55,
    desc: "Managing structured data in relational databases.",
  },
  {
    name: "Appwrite",
    icon: <SiAppwrite color="#FD366E" />,
    level: "Intermediate",
    percent: 55,
    desc: "Backend-as-a-service for authentication and storage.",
  },

  // ================= TOOLS =================
  {
    name: "Git & GitHub",
    icon: <DiGit color="#F05032" />,
    level: "Semi-pro",
    percent: 65,
    desc: "Version control and collaborative development.",
  },
];

const softSkills = [
  "Communication",
  "Problem-Solving",
  "Critical Thinking",
  "Adaptability",
  "Collaboration / Teamwork",
  "Time Management",
  "Attention to Detail",
  "Growth Mindset",
  "Empathy",
  "Accountability",
];

function SkillsSection() {
  return (
    <section className="skills-section" id="skills-section">
      <div className="skills-section-inner">

        {/* Section Heading */}
        <div className="section-brush-wrapper">
          <div className="section-brush-img"></div>
          <h2 className="section-heading">
            Personal <span className="blue">skillset</span>
          </h2>
        </div>

        {/* Hard Skills */}
        <p className="skills-category-title">Hard skills</p>

        <div className="skills-grid">
          {hardSkills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              
              <div className="skill-level-bar-wrapper">
                <div
                  className="skill-level-bar"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>

              <span className="skill-level-label">{skill.level}</span>

              <div className="skill-icon">{skill.icon}</div>

              <p className="skill-name">{skill.name}</p>

              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <p className="skills-category-title" style={{ marginTop: "48px" }}>
          Soft skills
        </p>

        <div className="soft-skills-grid">
          {softSkills.map((skill) => (
            <div className="soft-skill-item" key={skill}>
              <div className="soft-skill-dot"></div>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;