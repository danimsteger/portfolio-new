import { ListGroup, Row, Col } from "react-bootstrap";

export default function Resume2() {
  return (
    <div id="resume-section">
      <h1 style={{ textAlign: "center", marginTop: 100, marginBottom: 50 }}>
        Resume
      </h1>
      <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Col xl={4} style={{ textAlign: "center" }}>
          <h3>Front-End Proficiences </h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ListGroup style={{ width: "50%" }}>
              <ListGroup.Item>HTML</ListGroup.Item>
              <ListGroup.Item>CSS</ListGroup.Item>
              <ListGroup.Item>JavaScript</ListGroup.Item>
              <ListGroup.Item>jQuery</ListGroup.Item>
              <ListGroup.Item>React</ListGroup.Item>
              <ListGroup.Item>Bootstrap</ListGroup.Item>
              <ListGroup.Item>Ant Design</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
        <Col xl={4} style={{ textAlign: "center" }}>
          <h3>Back-End Proficiences </h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ListGroup style={{ width: "50%" }}>
              <ListGroup.Item>APIs</ListGroup.Item>
              <ListGroup.Item>Node.js</ListGroup.Item>
              <ListGroup.Item>Express.js</ListGroup.Item>
              <ListGroup.Item>MySQL</ListGroup.Item>
              <ListGroup.Item>Sequelize</ListGroup.Item>
              <ListGroup.Item>MongoDB</ListGroup.Item>
              <ListGroup.Item>Mongoose</ListGroup.Item>
              <ListGroup.Item>REST</ListGroup.Item>
              <ListGroup.Item>GraphQL</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
}
