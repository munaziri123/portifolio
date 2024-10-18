import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAndroidstudio,
  SiSlack,
  SiFigma,
  SiDocker,
  SiTeamviewer,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <h1>VS CODE</h1>
        <SiVisualstudiocode />
        <strong><h3>Pro</h3></strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1>Android Studio</h1>
        <SiAndroidstudio />
        <strong><h3>Intermadiate</h3></strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1>Docker</h1>
        <SiDocker />
        <strong><h3>Semi-pro</h3></strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1>Teamviewer</h1>
        <SiTeamviewer />
        <strong><h3>Intermadiate</h3></strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1>Figma</h1>
        <SiFigma />
        <strong><h3>Junior</h3></strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1>Slack</h1>
        <SiSlack />
        <strong><h3>Intermadiate</h3></strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1>Vercel</h1>
        <SiVercel />
        <strong><h3>Expert</h3></strong>
      </Col>
    </Row>
  );
}

export default Toolstack;
