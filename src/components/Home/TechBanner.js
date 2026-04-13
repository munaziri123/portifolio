import React from "react";
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
  SiFirebase,
  SiPython,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

const technologies = [
  // ================= AI =================
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
  { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },

  // ================= WEB & MOBILE =================
  { name: "JavaScript", icon: <DiJavascript1 />, color: "#F7DF1E" },
  { name: "React", icon: <DiReact />, color: "#61DAFB" },
  { name: "Flutter", icon: <SiFlutter />, color: "#54C5F8" },
  { name: "Dart", icon: <SiDart />, color: "#0175C2" },

  // ================= FRONTEND =================
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <SiCss3 />, color: "#264DE4" },

  // ================= BACKEND =================
  { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
  { name: "Appwrite", icon: <SiAppwrite />, color: "#FD366E" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },

  // ================= TOOLS =================
  { name: "Git", icon: <DiGit />, color: "#F05032" },

  // ================= SYSTEM =================
  { name: "C++", icon: <CgCPlusPlus />, color: "#00599C" },
];

function TechBanner() {
  return (
    <section className="tech-banner">
      <div className="tech-banner-inner">
        <h2 className="text-center">Technologies I Work With</h2>

        <div className="tech-icons-grid">
          {technologies.map((tech) => (
            <div className="tech-icon-badge" key={tech.name}>
              <span
                className="icon"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechBanner;