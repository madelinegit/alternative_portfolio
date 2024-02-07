import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/logolg.png";
import Particle from "../Particle";
import Home2 from "../About/Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/self.png";
import About from "../About/About";
import AboutMe from "./AboutMe";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello World!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Madeline The Nomad</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                <img
                  src={myImg}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <AboutMe />
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
