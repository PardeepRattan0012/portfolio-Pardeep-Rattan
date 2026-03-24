import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Pardeep Rattan </span>
            from <span className="purple"> Punjab, India.</span>
            <br />
          A Computer Science student , currently pursuing my B.Tech from Lovely Professional University (LPU), Phagwara.
            <br />
            I am continuously working on improving my problem-solving skills and building real-world projects using Python. I am always eager to learn new technologies and grow as a developer.
            <br />
            <br />
            Apart from coding, Extra Co-Curricular Activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Boxing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dedicated to creating impactful and meaningful digital
            experiences!"
          </p>
          <footer className="blockquote-footer">Pardeep Rattan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
