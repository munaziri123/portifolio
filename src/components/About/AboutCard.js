import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, Iam <span className="purple">MUNAZIRI Josue </span>
            from <span className="purple"> Kigali, Rwanda.</span>
            <br />
            I am currently Student at <span className="purple"><h2><a href="https://www.bing.com/images/search?q=university+of+scientific+and+technological+pole+abdelhafid%27ahadden+sidi+abdellah&qpvt=university+of+scientific+and+technological+pole+Abdelhafid+ahdadden+sidi+abdellah&form=IGRE&first=1">University of Science and Technological pole of Abdelhafid Ahdadden Sidi Abdellah, Ntional school of Artificial Intelligence</a></h2></span>.
            <br /> <br />
            I have completed Advanced Level in Mathematics, Computer Science and Modern Economics at GS Gihundwe.
            <br /> <br />
            I had Enroled in Computer Engineering for six (6) months at University of Rwanda before i came to Algeria
            <br /> <br />
            I have completed CISCO netAcard courses on IT Issentials and Introduction to cyber security at University of Rwanda
            <br /> <br />
            <br /> <br />
            I' am Alison Certified in Website development
            <br /> <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Analysing AI future dreamed projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Big fun of football (RWANDA, Real Madrid and Liverpool)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Big mistake of life is failing before you fail"{" "}
          </p>
          <footer className="blockquote-footer">MUNAZIRI</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
