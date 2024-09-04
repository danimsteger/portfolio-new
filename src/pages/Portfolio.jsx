import Project from "../components/Project";
import CarouselProject from "../components/carouselitem";
import Carousel from "react-bootstrap/Carousel";
import { Card, Row, Col } from "react-bootstrap";

const projects = [
  {
    id: 1,
    name: "Beat Bound 🎧",
    description: "Full Stack Application",
    languages: "JavaScript, Node.js, Express.js, MongoDB, GraphQL, Ant Design",
    link: "https://tech-blog-4o3v.onrender.com",
    repository: "https://github.com/danimsteger/beat-bound?tab=readme-ov-file",
    image: "./assets/beatbound1.png",
  },
  {
    id: 2,
    name: "ReelTime 🎬",
    description: "Full Stack Application",
    languages: "JavaScript, Node.js, Express.js, Sequelize, Handlebars.js",
    link: "https://movie-app-uu6k.onrender.com/",
    repository: "https://github.com/danimsteger/movie-app",
    image: "./assets/reel1.png",
  },
  {
    id: 3,
    name: "Tech Blog",
    description: "Full Stack Application",
    languages: "JavaScript, Node.js, Express.js, Sequelize, Handlebars.js",
    link: "https://tech-blog-4o3v.onrender.com",
    repository: "https://github.com/danimsteger/tech-blog",
    image: "./assets/multi.png",
  },
  {
    id: 4,
    name: "Weather Dashboard",
    description: "Third-Party API Integration",
    languages: "HTML, CSS, JavaScript, jQuery, dayjs, Bootstrap",
    link: "https://danimsteger.github.io/weather-dashboard",
    repository: "https://github.com/danimsteger/weather-dashboard",
    image: "./assets/weater1.png",
  },
  {
    id: 5,
    name: "☀︎  MotivAction",
    description: "Interactive Front-End App",
    languages: "JavaScript, HTML, jQuery, Bulma",
    link: "https://danimsteger.github.io/motivaction/",
    repository: "https://github.com/danimsteger/motivaction",
    image: "./assets/motiv11.png",
  },
  {
    id: 6,
    name: "Employee Tracker",
    description: "Command-Line Application",
    languages: "JavaScript, SQL, Express.js, Node.js, Inquirer",
    link: "https://drive.google.com/file/d/1r6mD8iPLumYyfLTntgI6QW7Ca7gprsKV/view?pli=1",
    repository: "https://github.com/danimsteger/sql-employee-tracker",
    image: "./assets/employee1.png",
  },
  {
    id: 7,
    name: "My First Blog",
    description: "Web API Integration",
    languages: "JavaScript, HTML, CSS",
    link: "https://danimsteger.github.io/my-blog/",
    repository: "https://github.com/danimsteger/my-blog",
    image: "./assets/speech1.png",
  },
];

export default function Portfolio() {
  return (
    <div
      id="portfolio-section"
      style={
        {
          // display: "flex",
          // justifyContent: "center",
          // margin: 50,
          // flexDirection: "row",
        }
      }
    >
      {/* <h1 className="text-center"> Portfolio</h1>
      <div className="card-group">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div> */}
      <Row
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 100,
        }}
      >
        <h1 style={{ textAlign: "center" }}>Portfolio</h1>
        <Col xl={4} style={{}}>
          <a href={projects[0].link} target="_blank">
            <Card style={{ border: "none" }}>
              <Card.Img variant="top" src={projects[0].image} />
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title style={{ fontSize: "1.75rem" }}>
                  {projects[0].name}
                </Card.Title>
                <Card.Text style={{ fontSize: "1rem" }}>
                  A full-stack web application designed for music enthusiasts to
                  search, save, and explore songs, artists, and events through
                  the integration of Spotify and Ticketmaster APIs. The
                  application features a responsive and interactive user
                  interface built with React and Ant Design, providing a
                  seamless experience across devices with functionality like
                  song previews and event searches. The backend is powered by
                  Node.js, Express, and MongoDB, utilizing GraphQL for efficient
                  data management and secure user authentication via JSON Web
                  Tokens
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col
          xl={2}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "1.25rem", textAlign: "center" }}>
            Beat Bound 🎧 and ReelTime 🎬 were two of the major collaborative
            projects that I completed as part of UNCC Coding Boot Camp. They are
            both full stack, interactive web applications.
          </div>
        </Col>
        <Col xl={4} style={{}}>
          <a href={projects[1].link} target="_blank">
            <Card style={{ border: "none" }}>
              <Card.Img variant="top" src={projects[1].image} />
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title style={{ fontSize: "1.75rem" }}>
                  {projects[1].name}
                </Card.Title>
                <Card.Text style={{ fontSize: "1rem" }}>
                  A dynamic social media web application created for movie
                  enthusiasts to explore, review, and share opinions on films.
                  The project features a responsive and visually appealing
                  interface built with Bootstrap and CSS, ensuring cross-device
                  compatibility and enhanced user engagement. Developed using
                  the MVC architecture with JavaScript, Express, and Sequelize,
                  the application integrates external APIs (OMDb and Watch Mode)
                  to provide users with comprehensive movie data.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>

      <Row
        style={{ display: "flex", justifyContent: "center", marginTop: 100 }}
      >
        <h4 style={{ textAlign: "center" }}>Additional assignments: </h4>
        <Carousel
          style={{
            width: "65%",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          {/* {projects.map((project) => (
          <CarouselProject key={project.id} />
        ))} */}
          {projects.map((project) => (
            <Carousel.Item
              key={project.id}
              style={{ backgroundColor: "transparent" }}
            >
              <a href={project.link} target="_blank">
                <img
                  src={project.image}
                  className="d-block w-100"
                  alt={project.name}
                  style={{ borderRadius: 20 }}
                />
              </a>
              <Carousel.Caption style={{ backgroundColor: "transparent" }}>
                <h3
                  style={{
                    color: "var(--darkpurple)",
                    backgroundColor: "transparent",
                  }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-center"
                  style={{ backgroundColor: "transparent" }}
                >
                  {project.description}
                </p>
                <p
                  className="text-center"
                  style={{ backgroundColor: "transparent" }}
                >
                  <small
                    className="text-body-secondary"
                    style={{ backgroundColor: "transparent", margin: 5 }}
                  >
                    {project.languages}
                  </small>
                </p>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <a
                    className="btn btn-outline-secondary project-button"
                    href={project.link}
                    target="_blank"
                  >
                    Live App
                  </a>

                  <a
                    className="btn btn-outline-secondary project-button "
                    href={project.repository}
                    target="_blank"
                  >
                    Repository
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
      {/* <Carousel>
        <Carousel.Item>
          <img src={projects[0].image} />
          <Carousel.Caption>
            <h2>Hello</h2>
            <p>helloooooo</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={projects[0].image} />
          <Carousel.Caption>
            <h2>Hello</h2>
            <p>helloooooo</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
}
