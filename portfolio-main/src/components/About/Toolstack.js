import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMongodb,
  SiMicrosoftexcel,
  SiCanva,
  SiPowerbi,
} from "react-icons/si";
import TextTitle from "./TextTitle";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
        <TextTitle text="MS Excel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <TextTitle text="Power BI" />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <TextTitle text="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <TextTitle text="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
        <TextTitle text="canva" />
      </Col>
    </Row>
  );
}

export default Toolstack;
