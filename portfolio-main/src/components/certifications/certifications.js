import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle"; // ✅ correct import

import cnImg1 from "../../Assets/bits.png";
import cnImg2 from "../../Assets/hardware.png";
import cnImg3 from "../../Assets/PeertoPeer.png";
import cnImg4 from "../../Assets/TCP.png";
import cnImg5 from "../../Assets/Packet.png";
import cnImg from "../../Assets/Fundamental_of_CN.png";

function Certifications() {
  const certData = [
    {
      title: "Fundamentals of Network Communication",
      issuer: "Coursera",
      img: cnImg,
      link: "https://www.coursera.org/account/accomplishments/verify/NFMXIC2VH79T",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      img: cnImg1,
      link: "https://www.coursera.org/account/accomplishments/verify/XUFFDVV0J44C",
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      issuer: "Coursera",
      img: cnImg2,
      link: "https://www.coursera.org/account/accomplishments/verify/Y1ZP9D1BBN16",
    },
    {
      title: "Peer-to-Peer Protocols and Local Area Networks",
      issuer: "Coursera",
      img: cnImg3,
      link: "https://www.coursera.org/account/accomplishments/verify/X1O68ZO54VB6",
    },
    {
      title: "TCP/IP and Advanced Topics",
      issuer: "Coursera",
      img: cnImg4,
      link: "https://www.coursera.org/account/accomplishments/verify/HR2EO0GRO981",
    },
    {
      title: "Packet Switching Networks and Algorithms",
      issuer: "Coursera",
      img: cnImg5,
      link: "https://www.coursera.org/account/accomplishments/verify/GIRD3HLUHV88",
    },
  ];

  return (
    <Container fluid className="project-section">

      {/* 🔥 PARTICLE BACKGROUND */}
      <Particle />

      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of my networking certifications.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certData.map((cert, index) => (
            <Col md={4} className="project-card" key={index}>
         <div
  className="project-card-view"
  style={{
    borderRadius: "25px",
    overflow: "hidden",
    transition: "0.3s",
    boxShadow: "0 0 20px rgba(199, 112, 240, 0.3)",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow =
      "0 0 30px rgba(199, 112, 240, 0.6)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.boxShadow =
      "0 0 20px rgba(199, 112, 240, 0.3)";
  }}
>
                {/* IMAGE CLICKABLE */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={cert.img}
                    alt="certificate"
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      marginBottom: "15px",
                    }}
                  />
                </a>

                {/* TITLE */}
                <h3 style={{ fontSize: "1.2rem", minHeight: "60px" }}>
                  {cert.title}
                </h3>

                {/* ISSUER */}
                <p>🎓 {cert.issuer}</p>

                {/* BUTTON */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-2"
                >
                  View Certificate
                </a>

              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;