import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nationalgeographique from "../../Assets/nationalgeographique.jpg";
import valorant from "../../Assets/valorant.jpg";
import weatherapp from "../../Assets/weatherapp.jpg";
import cea from "../../Assets/cea.png";
import LMA from "../../Assets/LMA.png";
import cnrs from "../../Assets/cnrs.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Internships Section */}
        <h1 className="project-heading">
          My <strong className="purple">Internships</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some internships I've completed recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Add Internship cards here in the same format as project cards */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cea} // Replace with an appropriate image
              isBlog={true}
              title="Full-Stack Developer at CEA"
              description="Worked at Biam-Cité des Énergies, achieving a 30% improvement in web performance, and integrating Text Mining and Genome Mining, enhancing data analysis speed by 40%. Upgraded an existing PHP/MySQL web app with ReactJS and Symfony, reducing load times by 30% and improving user experience for over 200 users."
              ghLink="https://www.cite-des-energies.fr/biam/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LMA} // Replace with an appropriate image
              isBlog={true}
              title="ReactJS/Symfony Developer at Laboratory of Mechanics and Acoustics"
              description="Developed version 2 of an inventory management software with a web interface, cutting search time by 35% for over 100 users. Designed a centralized database for lab file management, saving 10 hours per month for the team in document organization."
              
              ghLink="https://laboratoire-mecanique-acoustique.fr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cnrs} // Replace with an appropriate image
              isBlog={true}
              title="HTML5/CSS/JS/PHP Developer at UMR MAP CNRS/MC 3495"
              description="Managed databases by creating SQL schemas and CRUD interfaces for the MEMORIA project. Developed offline PDF forms, reducing manual entry time by 20% and smoothly integrating over 500 entries per month."
              ghLink="https://www.map.cnrs.fr/fr/recherche/projets/memoria/"
            />
          </Col>


          {/* Add more internship cards here */}
        </Row>

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
