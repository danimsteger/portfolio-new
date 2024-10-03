import { Row, Col } from "react-bootstrap";

export default function Intro() {
  return (
    <div className="intro">
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col
          xs={4}
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
          }}
        >
          <img src="./assets/me2.png" height="500"></img>
        </Col>
        <Col className="intro-words">
          <p className="intro-text montserrat-alternates-bold"> Hello! I am</p>
          <p className="intro-name calistoga-regular">Danielle Steger</p>
          <p className="intro-title montserrat-alternates-extrabold">
            Full Stack Developer
          </p>
        </Col>
      </Row>
    </div>
  );
}
