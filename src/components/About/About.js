import React from "react";
import { Container, Col, Row} from "react-bootstrap";
import Particle from "../Particle";
import aboutPic from "../../Assets/about.png";
import SummaryCard from "./Summary";
import Home2 from "./Home2";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <Container fluid className="home-section">
      <Particle />
      <Container>
        <Row className="aboutstuff"style={{ /* justifyContent: "center" */ padding: "10px", marginTop: "50px"}}>
          <Col
            md={7}
            className="about-summary"
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "0px", margin: "10px"}}>
              <strong className="purple">Professional Summary</strong>
            </h1>
            {/* <Aboutcard /> */}
            <SummaryCard/>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "130px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* <Container> */}
            <img src={aboutPic} alt="about" className="img-fluid" />
            <ul className= "icons" style={{fontSize: "50px"}}>
            <li className="social-icons ">
              <a
                href="https://github.com/madelinegit"
                style={{ color: "#700c86"}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/madelinemarie/"
                style={{ color: "#700c86" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn/>
              </a>
            </li>
            
          </ul>
          {/* </Container> */}
          </Col>
        </Row>
 
        <Home2/>
      </Container>
    </Container>
  );
}

export default About;
