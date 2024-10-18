import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import carbon from "../../Assets/first_Project.PNG";
import soft from "../../Assets/second_pro.PNG";
import pharm_app from "../../Assets/pharma_users.png";
import pharmacy from "../../Assets/personal_pro.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carbon}
              isBlog={false}
              title="Corban"
              description="Corban is a boutique law firm with an exceptional track record (over the short period of its existence) in providing quality and highly specialized legal advice to clients across the private and public sectors."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pharmacy}
              isBlog={false}
              title="PharmaLink"
              description="This is My ongoing personal project that will help pharmacies to publish their medicines and Rise their market value"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soft}
              isBlog={false}
              title="Iwacu Soft Tech"
              description="Iwacu Soft is Rwandan system which gives different cultural and social science knowldges and it help Rwandan to get rewards by answering some questions"
            />
            
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pharm_app}
              isBlog={false}
              title="PharmaLinkAPP"
              description="This is Personal Mobile application related to PharmaLink where patients will be allowed to search recommended medicine and be able to have conversion with AI doctor, its quite big ongoing project of my Life, as an AI Engineer i need to develop a model that will hold data for diseases and medicine and other related informations"
            />
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
