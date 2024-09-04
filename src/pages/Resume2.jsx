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
              <ListGroup.Item className="list-group">HTML</ListGroup.Item>
              <ListGroup.Item className="list-group">CSS</ListGroup.Item>
              <ListGroup.Item className="list-group">JavaScript</ListGroup.Item>
              <ListGroup.Item className="list-group">jQuery</ListGroup.Item>
              <ListGroup.Item className="list-group">React</ListGroup.Item>
              <ListGroup.Item className="list-group">Bootstrap</ListGroup.Item>
              <ListGroup.Item className="list-group">Ant Design</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
        <Col xl={4} style={{ textAlign: "center" }}>
          <h3>Back-End Proficiences </h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ListGroup style={{ width: "50%" }}>
              <ListGroup.Item className="list-group">APIs</ListGroup.Item>
              <ListGroup.Item className="list-group">Node.js</ListGroup.Item>
              <ListGroup.Item className="list-group">Express.js</ListGroup.Item>
              <ListGroup.Item className="list-group">MySQL</ListGroup.Item>
              <ListGroup.Item className="list-group">Sequelize</ListGroup.Item>
              <ListGroup.Item className="list-group">MongoDB</ListGroup.Item>
              <ListGroup.Item className="list-group">Mongoose</ListGroup.Item>
              <ListGroup.Item className="list-group">REST</ListGroup.Item>
              <ListGroup.Item className="list-group">GraphQL</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
}
