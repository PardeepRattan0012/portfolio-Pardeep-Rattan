import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile_image.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHO I <span className="purple"> AM</span>
              
            </h1>
            <p className="home-about-body">
              <li>Passionate about programming and web development</li>
              <br />
              <br /><li>Skilled in
              <i>
                <b className="purple">
                  {" "}
                  React, Javascript and  Python{" "}
                </b>
              </i>
              </li>
              <br />
              <br />
             <li> Interested in building innovative &nbsp;
              <i>
                <b className="purple">Web Apps and Products </b>
              </i>
              </li>
              <br />
              <br />
              <li>Experienced in developing projects using <b className="purple">Js and Django</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
              </li>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/PardeepRattan0012"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pardeeprattan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* will add leetcode and hacker rank profiles */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
