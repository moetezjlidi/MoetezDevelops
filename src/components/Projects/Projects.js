import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nationalgeographique from "../../Assets/nationalgeographique.jpg";
import valorant from "../../Assets/valorant.jpg";
import weatherapp from "../../Assets/weatherapp.jpg";
import camping from "../../Assets/camping.jpg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Projects Section */}
        <h1 className="project-heading" style={{ marginTop: "40px" }}>
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={camping} // Replace with an actual image if available
              isBlog={false}
              title="Spring Based Climbing Club Application"
              description="I developed a comprehensive climbing club management application during my studies at Aix-Marseille University. The backend leveraged Spring Boot and Spring Data JPA for data persistence, while the web interface was built with Spring MVC and JSP. Security was implemented using Spring Security, ensuring a secure experience for users. The project was packaged as a WAR file and deployed on Tomcat, and included features like Spring Mail integration for automated email communications."
              ghLink="https://github.com/moetezjlidi/"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nationalgeographique} // Replace with an actual image if available
              isBlog={false}
              title="National Geographic API Explorer"
              description="An application that integrates with the National Geographic API to explore and display stunning images and articles. Built with HTML, Javascript and styled with Tailwind CSS, this app showcases API handling, state management, and responsive design."
              ghLink="https://github.com/moetezjlidi/NationalGeoGraphique"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={valorant} // Replace with an actual image if available
              isBlog={false}
              title="Valorant App"
              description="A comprehensive Valorant companion app providing information on agents, maps, and weapons. Built with AndroidStudio and Java, it integrates Valorant data through an API, allowing users to view details and statistics, enhancing their gaming experience."
              ghLink="https://github.com/moetezjlidi/ValorantApp"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp} // Replace with an actual image if available
              isBlog={false}
              title="Weather App"
              description="A weather application that fetches real-time weather data from an API. It allows users to check current weather conditions, temperature, and forecasts for any city worldwide. Built with Java and designed with a user-friendly interface."
              ghLink="https://github.com/moetezjlidi/WeatherApp"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
