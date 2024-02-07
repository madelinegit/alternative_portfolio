import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Techstack from "../About/Techstack";


function AboutMe() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "30px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            {/* <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know <strong className="purple">M Dev</strong>
            </h1> */}
            <Aboutcard />
          </Col>
        </Row>
      </Container>
      <Container style={{ justifyContent: "center", padding: "30px" }}>
        <h1 className="project-heading" style={{ textAlign: "center" }}>
          Professional <strong className="purple">Skillset </strong>
        </h1>
      </Container>
      <Techstack />
    </Container>
  );
}

export default AboutMe;
