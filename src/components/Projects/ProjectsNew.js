import React from "react";
import carbon from "../../Assets/first_Project.PNG";
import soft from "../../Assets/second_pro.PNG";
import pharm_app from "../../Assets/pharma_users.png";
import pharmacy from "../../Assets/personal_pro.PNG";
import blankPage from "../../Assets/blank1.jpg";

const projects = [
  {
    tag: "Web Application",
    title: "Corban",
    desc: "Corban is a boutique law firm with an exceptional track record in providing quality and highly specialized legal advice to clients across the private and public sectors.",
    image: carbon,
    link: null,
  },
  {
    tag: "Personal Project",
    title: "PharmaLink",
    desc: "My ongoing personal project that will help pharmacies to publish their medicines and rise their market value — connecting patients with the right medication online.",
    image: pharmacy,
    link: null,
  },
  {
    tag: "Mobile & Web",
    title: "Iwacu Soft Tech",
    desc: "Iwacu Soft is a Rwandan system which gives different cultural and social science knowledge and helps Rwandans get rewards by answering questions.",
    image: soft,
    link: null,
  },
  {
    tag: "Mobile Application",
    title: "PharmaLink App",
    desc: "Personal mobile application where patients can search recommended medicine and have AI doctor conversations. A big ongoing project combining AI engineering with healthcare solutions.",
    image: pharm_app,
    link: null,
  },
  {
    tag: "Coming Soon",
    title: "Upcoming Projects",
    desc: "Several projects currently under development that can't be published due to contract terms. They will be published here once launched by their owners.",
    image: blankPage,
    link: null,
  },
];

function ProjectsNew() {
  return (
    <section className="projects-section" id="projects-anchor">
      <div className="projects-section-inner">
        <div className="section-brush-wrapper">
          <div className="section-brush-img"></div>
          <h2 className="section-heading">
            My Recent <span className="blue">Works</span>
          </h2>
          <p style={{ color: "#6B7280", marginTop: "12px" }}>
            Here are a few projects I've worked on recently.
          </p>
        </div>

        <div className="project-list">
          {projects.map((proj, i) => (
            <div className="project-item-card" key={i}>
              <div className="project-item-content">
                <div>
                  <p className="project-tag">{proj.tag}</p>
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.desc}</p>
                </div>
                <a
                  href={proj.link || "#"}
                  className="btn-view-project"
                  id={`project-btn-${i}`}
                  target={proj.link ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  View project →
                </a>
              </div>
              <div className="project-item-image">
                <img src={proj.image} alt={proj.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsNew;
