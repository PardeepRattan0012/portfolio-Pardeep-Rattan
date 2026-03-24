import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
} from "react-icons/di";
import TextTitle from "./TextTitle";
import { SiCplusplus } from "react-icons/si";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <TextTitle text="HTML" />
      </Col>
         <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <TextTitle text="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <TextTitle text="Javascript" />
      </Col>

  
      <Col xs={4} md={2} className="tech-icons">
  <SiCplusplus />
  <TextTitle text="C++" />
</Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <TextTitle text="Python" />
      </Col>
     
    </Row>
  );
}

export default Techstack;
