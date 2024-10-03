import { Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <div className="section" id="about-section">
      <Row>
        <Col className="alt-background">
          <h1 className="headers calistoga-regular about-header"> About </h1>
          <p className="montserrat-alternates-regular about-p">
            Hi! My name is Danielle Steger, and I am a software developer with
            experience in building full-stack web applications. While I enjoy
            front-end development, especially the challenge of creating
            functional yet visually appealing interfaces, I also have experience
            working across the entire stack. From developing responsive user
            experiences to implementing efficient back-end systems, I am
            passionate about building robust, dynamic web applications.
          </p>
          <p className="montserrat-alternates-regular about-p">
            After completing the University of North Carolina - Charlotte Coding
            Boot Camp, I am excited to continue enhancing my skills in front-end
            technologies like React and CSS, while also deepening my knowledge
            of back-end tools such as Node.js, Express, and MongoDB. My goal is
            to create seamless, user-friendly applications that solve real-world
            problems.
          </p>
          <p className="montserrat-alternates-regular about-p">
            Outside of coding, I enjoy tutoring mathematics, spending time with
            my dog Mojo, watching Survivor, reading, and thrifting for unique
            home items. I also cherish time with my family and love to travel.
          </p>
        </Col>
      </Row>
    </div>
  );
}
