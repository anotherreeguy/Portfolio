import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ReeGuy </span>
            <br />
            I am currently working on ReeBit and other small projects
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing scripts
            </li>
            <li className="about-activity">
              <ImPointRight /> Technology related bug fixing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "AAAAAAAAA"{" "}
          </p>
          <footer className="blockquote-footer">ReeGuy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
