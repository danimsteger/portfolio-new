import { ListGroup, Row, Col, Container } from "react-bootstrap";

const frontEndSkills = [
  {
    id: 1,
    name: "HTML",
    logo: "./assets/tech/HTML5.png",
  },
  {
    id: 2,
    name: "CSS",
    logo: "./assets/tech/CSS3.png",
  },
  {
    id: 3,
    name: "JavaScript",
    logo: "./assets/tech/JavaScript.png",
  },
  {
    id: 4,
    name: "React",
    logo: "./assets/tech/React.png",
  },
  {
    id: 5,
    name: "Ant Design",
    logo: "./assets/tech/AntDesign.png",
  },
  {
    id: 6,
    name: "Bootstrap",
    logo: "./assets/tech/Bootstrap.png",
  },
  {
    id: 7,
    name: "jQuery",
    logo: "./assets/tech/jQuery.png",
  },
  {
    id: 8,
    name: "React Bootstrap",
    logo: "./assets/tech/ReactBoot.png",
  },
  {
    id: 9,
    name: "Bulma",
    logo: "./assets/tech/Bulma.png",
  },
  {
    id: 10,
    name: "Vite",
    logo: "./assets/tech/Vite.js.png",
  },
];

const backEndSkills = [
  {
    id: 1,
    name: "Node.js",
    logo: "./assets/tech/Node.js.png",
  },
  {
    id: 2,
    name: "Express",
    logo: "./assets/tech/Express.png",
  },
  {
    id: 3,
    name: "MySQL",
    logo: "./assets/tech/MySQL.png",
  },
  {
    id: 4,
    name: "Sequelize",
    logo: "./assets/tech/Sequelize.png",
  },
  {
    id: 5,
    name: "PostgresSQL",
    logo: "./assets/tech/PostgresSQL.png",
  },
  {
    id: 6,
    name: "MongoDB",
    logo: "./assets/tech/MongoDB.png",
  },
  {
    id: 7,
    name: "Mongoose",
    logo: "./assets/tech/Mongoose.js.png",
  },
  {
    id: 8,
    name: "GraphQL",
    logo: "./assets/tech/GraphQL.png",
  },
  {
    id: 9,
    name: "Handlebars.js",
    logo: "./assets/tech/Handlebars.png",
  },
  {
    id: 10,
    name: "NPM",
    logo: "./assets/tech/NPM.png",
  },
];

const addSkills = [
  {
    id: 1,
    name: "VS Code",
    logo: "./assets/tech/VSCode.png",
  },
  {
    id: 2,
    name: "Canva",
    logo: "./assets/tech/Canva.png",
  },
  {
    id: 3,
    name: "GitHub",
    logo: "./assets/tech/GitHub.png",
  },
  {
    id: 4,
    name: "GitLab",
    logo: "./assets/tech/GitLab.png",
  },
  {
    id: 5,
    name: "Insomnia",
    logo: "./assets/tech/Insomnia.png",
  },
  {
    id: 6,
    name: "Jest",
    logo: "./assets/tech/Jest.png",
  },
  {
    id: 7,
    name: "Markdown",
    logo: "./assets/tech/Markdown.png",
  },
  {
    id: 8,
    name: "Slack",
    logo: "./assets/tech/Slack.png",
  },
  {
    id: 9,
    name: "Trello",
    logo: "./assets/tech/Trello.png",
  },
];
export default function Resume2() {
  return (
    <div id="resume-section" className="section">
      <h1
        style={{ marginTop: 100, marginBottom: 50 }}
        className=" calistoga-regular skills-header headers"
      >
        Skills ✧ Technologies ✧ Frameworks
      </h1>

      <Row>
        <Col>
          <h1 className="montserrat-alternates-bold tech-labels">Frontend</h1>
        </Col>
        <Col>
          <h2 className="montserrat-alternates-bold tech-labels">Backend</h2>
        </Col>
      </Row>

      <Row>
        <Col className="skill-section">
          {frontEndSkills.map((frontEndSkill) => (
            <div className="logo-div">
              <img
                src={frontEndSkill.logo}
                alt={frontEndSkill.name}
                className="logos"
              />
              <h5 className="logo-name calistoga-regular">
                {frontEndSkill.name}
              </h5>
            </div>
          ))}
        </Col>

        <Col className="skill-section">
          {backEndSkills.map((backEndSkill) => (
            <div className="logo-div">
              <img
                src={backEndSkill.logo}
                alt={backEndSkill.name}
                className="logos"
              />
              <h5 className="logo-name calistoga-regular">
                {backEndSkill.name}
              </h5>
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <h1 className="tech-labels montserrat-alternates-bold">
          Additional Technologies
        </h1>
        <Col className="skill-section">
          {addSkills.map((addSkill) => (
            <div className="logo-div">
              <img src={addSkill.logo} alt={addSkill.name} className="logos" />
              <h5 className="logo-name calistoga-regular">{addSkill.name}</h5>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
}
