import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cea from "../../Assets/cea.png";
import LMA from "../../Assets/LMA.png";
import cnrs from "../../Assets/cnrs.png";
import LIS from "../../Assets/LIS.png";

function Internships() {
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
              imgPath={LIS} // Replace with an appropriate image
              isBlog={true}
              title="Kotlin Developer at LIS-LAB"
              description="Worked at LIS-LAB, where I designed a distributed system of CRCT replicas interconnected via a lattice consensus protocol, ensuring coordination-free consistency and fault tolerance. I developed a Kotlin CRCT module with HyperSQL persistence, reducing access times by 35%, and deployed a modular REST API for client read/write operations, maintaining flexibility and reducing synchronization conflicts by 45%. Load and stress testing validated system stability under high concurrency, achieving a latency below 100 ms."
              ghLink="https://www.lis-lab.fr//"
            />
          </Col>
          
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
      </Container>
    </Container>
  );
}

export default Internships;
