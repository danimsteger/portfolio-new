import Portfolio from "./Portfolio";
import { Row, Col } from "react-bootstrap";

import Resume2 from "./Resume2";

export default function About() {
  return (
    <div className="">
      <h1 className="text-center" id="about-section">
        {" "}
        About{" "}
      </h1>
      <Row>
        <Col
          xl={2}
          style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
        >
          <img src="./assets/mainphoto.png" height="300"></img>
        </Col>
        <Col style={{ marginTop: 40, margin: 40 }}>
          <p>
            Hi! My name is Danielle Steger, and I am an aspiring software
            developer.
          </p>
          <p>
            I am originally from Irmo, South Carolina, and currently reside in
            Cayce, South Carolina. In 2019, I graduated from the University of
            South Carolinas Honors College with a Bachelor of Science in Middle
            Level Education, concentrating in mathematics and social studies. I
            taught seventh-grade math for three years in Columbia, South
            Carolina. During my time teaching, I also worked as the Camp
            Director at Gravatt Camp and Conference Center, an Episcopal center
            in Aiken, South Carolina. In 2021, I earned a Master of Arts in
            Organizational Leadership from Columbia College.
          </p>
          <p>
            In 2024, I began my journey into the tech field by joining the
            University of North Carolina - Charlotte Coding Boot Camp for
            full-stack web development. I completed the program in August 2024,
            and I am eager to continue learning new languages and skills to
            prepare me for my new career.
          </p>
          <p>
            In my free time, I enjoy tutoring mathematics at all levels,
            spending time with my dog, Mojo. I am an avid Survivor viewer, love
            reading, and enjoy thrifting for items for my home. I also cherish
            spending time with my family and traveling.
          </p>
        </Col>
      </Row>
      <Portfolio></Portfolio>
      <Resume2></Resume2>
    </div>
  );
}
