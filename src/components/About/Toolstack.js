import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiUbuntu,
  SiLinux,
  SiSony,
  SiAdobephotoshop,
  SiAdobepremierepro
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSony />
      </Col>
    </Row>
  );
}

export default Toolstack;
