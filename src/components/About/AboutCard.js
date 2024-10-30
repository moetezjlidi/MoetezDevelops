import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Moetez JLIDI </span>
            from <span className="purple"> Marseille, France.</span>
            <br />
            I am a passionate full-stack web developer specialized in 
            <span className="purple"> ReactJS</span>, 
            <span className="purple"> Symfony</span>, and 
            <span className="purple"> SQL</span>.
            <br />
            With a strong background in computer engineering, I focus on 
            data management, web development, and systemic analysis to create 
            innovative solutions.
            <br />
            <br />
            Some other activities that I enjoy include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
