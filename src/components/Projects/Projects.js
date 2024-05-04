import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="ReeBit's Page"
              description="Quick website explaining what ReeBit is."
              ghLink="https://github.com/anotherreeguy/ReeBit"
              demoLink="https://anotherreeguy.github.io/ReeBit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ReeGuy's Head Finder"
              description="A website which let's you find Minecraft heads."
              ghLink="https://github.com/anotherreeguy/headfinder"
              demoLink="https://anotherreeguy.github.io/headfinder/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Random Minecraft Server Finder"
              description="Ever bored of Minecraft Servers? Try Minecraft Server Finder."
              ghLink="https://github.com/anotherreeguy/minecraft-server-finder"
              demoLink="https://anotherreeguy.github.io/Minecraft-Server-Finder/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Quiz Game"
              description="Uploading to GitHub soon."
              ghLink=""
              demoLink=""
            />
          </Col>



export default Projects;
