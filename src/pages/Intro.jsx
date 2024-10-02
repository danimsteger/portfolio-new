import { Row, Col } from "react-bootstrap";

export default function Intro() {
  return (
    <div className="intro">
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col>
          <p className="intro-text"> Hello! I am</p>
          <p className="intro-name calistoga-regular">Danielle Steger</p>
          <p className="intro-title">Full Stack Developer</p>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="./assets/picofme.png" height="500"></img>
        </Col>
      </Row>
    </div>
  );
}
