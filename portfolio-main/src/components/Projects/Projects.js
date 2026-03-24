import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import coaching from "../../Assets/Projects/coaching.png";

import chess from "../../Assets/Projects/chess.png";
import ZOMATO from "../../Assets/Projects/zomato.png";
const ProjectCard = React.lazy(() => import("./ProjectCards"));
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectCard
                imgPath={coaching}
                isBlog={false}
                title="A1-Coaching Site"
                description="Developed a responsive tuition/coaching website using HTML and CSS. The site includes structured pages for courses, faculty details, and contact information, with a clean layout and user-friendly design. Focused on proper styling, navigation, and responsiveness to ensure a smooth experience across devices.
"
                ghLink="https://github.com/PardeepRattan0012/a1brightcoaching"
                demoLink="https://a1brightcoaching.vercel.app/"
              />
            </Suspense>
          </Col>
          <Col md={4} className="project-card">
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectCard
                imgPath={chess}
                isBlog={false}
                title="Chess Game"
                description="Built a fully functional chess game using HTML, CSS, and JavaScript. It includes complete chess rules, piece movement validation, and game state management, with a simple and clean user interface for smooth gameplay."
                ghLink="https://github.com/PardeepRattan0012/Chess"
                demoLink="https://chess-game-olive-eight.vercel.app/"
              />
            </Suspense>
          </Col>
    
       <Col md={4} className="project-card">
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectCard
                imgPath={ZOMATO}
                isBlog={false}
                title="ZOMATO Dashboard"
                description="Created an interactive Zomato dashboard using Power BI to analyze restaurant data, ratings, and customer trends. The dashboard includes data visualization, filtering options, and key insights for better understanding of performance and user preferences."

                ghLink="https://github.com/PardeepRattan0012/ZOMATO_DASHBOARD_ANALYSIS"
                demoLink="https://app.powerbi.com/links/CT2C0Wcdsl?ctid=e14e73eb-5251-4388-8d67-8f9f2e2d5a46&pbi_source=linkShare"
              />
            </Suspense>
          </Col>
     
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
