import React from "react";
import { Col, Row } from "react-bootstrap";
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
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <h1>C++</h1>
        <CgCPlusPlus />
        <strong><h3>Junior</h3></strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h2>Java Script</h2>
        <DiJavascript1 />
        <strong><h3>Intermadiate</h3></strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1>Flutter</h1>
        <SiFlutter />
        <strong><h3>Semi-Pro</h3></strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1>React Js</h1>
        <DiReact />
        <strong><h3>Semi-Pro</h3></strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1>Dart</h1>
        <SiDart />
        <strong><h3>Semi-Pro</h3></strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1>AppWrite</h1>
        <SiAppwrite />
        <strong><h3>Pro</h3></strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1>MySql</h1>
        <SiMysql />
        <strong><h3>Intermadiate</h3></strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1>HTML 5</h1>
        <SiHtml5 />
        <strong><h3>Pro</h3></strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1>CSS</h1>
        <SiCss3 />
        <strong><h3>Intermadiate</h3></strong>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1>Github</h1>
        <DiGit />
        <strong><h3>Semi-Pro</h3></strong>
      </Col>
    </Row>
  );
}

export default Techstack;
