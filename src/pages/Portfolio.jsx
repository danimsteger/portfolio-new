import Project from "../components/Project";
import CarouselProject from "../components/carouselitem";
import Carousel from "react-bootstrap/Carousel";
import {
  Card,
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
  Button,
} from "react-bootstrap";

const projects = [
  {
    id: 1,
    name: "Beat Bound 🎧",
    description: "Full Stack Application",
    languages: "JavaScript, Node.js, Express.js, MongoDB, GraphQL, Ant Design",
    link: "https://beat-bound.onrender.com/",
    repository: "https://github.com/danimsteger/beat-bound?tab=readme-ov-file",
    image: "./assets/beat.png",
  },
  {
    id: 2,
    name: "ReelTime 🎬",
    description: "Full Stack Application",
    languages: "JavaScript, Node.js, Express.js, Sequelize, Handlebars.js",
    link: "https://movie-app-uu6k.onrender.com/",
    repository: "https://github.com/danimsteger/movie-app",
    image: "./assets/movie.png",
  },
  {
    id: 3,
    name: "Tech Blog",
    description: "Full Stack Application",
    languages: "JavaScript, Node.js, Express.js, Sequelize, Handlebars.js",
    link: "https://tech-blog-4o3v.onrender.com",
    repository: "https://github.com/danimsteger/tech-blog",
    image: "./assets/tech.png",
  },
  {
    id: 4,
    name: "Weather Dashboard",
    description: "Third-Party API Integration",
    languages: "HTML, CSS, JavaScript, jQuery, dayjs, Bootstrap",
    link: "https://danimsteger.github.io/weather-dashboard",
    repository: "https://github.com/danimsteger/weather-dashboard",
    image: "./assets/weather.png",
  },
  {
    id: 5,
    name: "☀︎  MotivAction",
    description: "Interactive Front-End App",
    languages: "JavaScript, HTML, jQuery, Bulma",
    link: "https://danimsteger.github.io/motivaction/",
    repository: "https://github.com/danimsteger/motivaction",
    image: "./assets/motivaction.png",
  },
  {
    id: 6,
    name: "Employee Tracker",
    description: "Command-Line Application",
    languages: "JavaScript, SQL, Express.js, Node.js, Inquirer",
    link: "https://drive.google.com/file/d/1r6mD8iPLumYyfLTntgI6QW7Ca7gprsKV/view?pli=1",
    repository: "https://github.com/danimsteger/sql-employee-tracker",
    image: "./assets/employee.png",
  },
  {
    id: 7,
    name: "My First Blog",
    description: "Web API Integration",
    languages: "JavaScript, HTML, CSS",
    link: "https://danimsteger.github.io/my-blog/",
    repository: "https://github.com/danimsteger/my-blog",
    image: "./assets/blog.png",
  },
];

export default function Portfolio() {
  const circleButtonStyle = {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "var(--mint)",
    border: "none",
    cursor: "pointer",
    margin: 10,
  };

  return (
    <div id="portfolio-section" className="section">
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
        <h1 className="headers calistoga-regular">Portfolio</h1>
        <Col xl={4} style={{}}>
          <a href={projects[0].link} target="_blank" className="major-project">
            <Card className="project-card-main">
              <Card.Img
                variant="top"
                src={projects[0].image}
                style={{ borderRadius: "10px 10px 0 0" }}
              />
              <Card.Body
                style={{
                  textAlign: "center",
                  backgroundColor: "var(--buccaneer)",
                  color: "var(--blush)",
                }}
              >
                <Card.Title
                  style={{ fontSize: "2rem", color: "var(--peachfuzz)" }}
                >
                  {projects[0].name}
                </Card.Title>
                <Card.Text style={{ fontSize: "1.25rem" }}>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "var(--buccaneer)",
                  }}
                >
                  <OverlayTrigger
                    placement="left"
                    overlay={
                      <Tooltip className="custom-tooltip2">
                        Live Application
                      </Tooltip>
                    }
                  >
                    <a href={projects[0].link} target="_blank">
                      <img
                        src="./assets/webbutton.png"
                        style={circleButtonStyle}
                      />
                    </a>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip className="custom-tooltip2">Repository</Tooltip>
                    }
                  >
                    <a href={projects[0].repository} target="_blank">
                      <img
                        src="./assets/github.png"
                        style={circleButtonStyle}
                      />
                    </a>
                  </OverlayTrigger>
                </div>
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
          <div
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
              color: "var(--buccaneer)",
            }}
          >
            <p>
              Beat Bound 🎧 and ReelTime 🎬 were two of the major collaborative
              projects that I completed as part of UNCC Coding Boot Camp. They
              are both full stack, interactive web applications. Please be
              patient.
            </p>
            <p>
              Some of the links to deployed applications take a few moments to
              load.
            </p>
          </div>
        </Col>
        <Col xl={4} style={{}}>
          <a href={projects[1].link} target="_blank">
            <Card className="project-card-main">
              <Card.Img
                variant="top"
                src={projects[1].image}
                style={{ borderRadius: "10px 10px 0 0" }}
              />
              <Card.Body
                style={{
                  textAlign: "center",
                  backgroundColor: "var(--buccaneer)",
                  color: "var(--blush)",
                }}
              >
                <Card.Title
                  style={{ fontSize: "2rem", color: "var(--peachfuzz)" }}
                >
                  {projects[1].name}
                </Card.Title>
                <Card.Text style={{ fontSize: "1.25rem" }}>
                  A dynamic social media web application created for movie
                  enthusiasts to explore, review, and share opinions on films.
                  The project features a responsive and visually appealing
                  interface built with Bootstrap and CSS, ensuring cross-device
                  compatibility and enhanced user engagement. Developed using
                  the MVC architecture with JavaScript, Express, and Sequelize,
                  the application integrates external APIs (OMDb and Watch Mode)
                  to provide users with comprehensive movie data.
                </Card.Text>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "var(--buccaneer)",
                  }}
                >
                  <OverlayTrigger
                    placement="left"
                    overlay={
                      <Tooltip className="custom-tooltip2">
                        Live Application
                      </Tooltip>
                    }
                  >
                    <a href={projects[1].link} target="_blank">
                      <img
                        src="./assets/webbutton.png"
                        style={circleButtonStyle}
                      />
                    </a>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip className="custom-tooltip2">Repository</Tooltip>
                    }
                  >
                    <a href={projects[1].repository} target="_blank">
                      <img
                        src="./assets/github.png"
                        style={circleButtonStyle}
                      />
                    </a>
                  </OverlayTrigger>
                </div>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>

      <Row
        style={{ display: "flex", justifyContent: "center", marginTop: 100 }}
      >
        <h4 className="add-assign calistoga-regular">
          Additional Assignments{" "}
        </h4>
        <Carousel
          // style={{
          //   width: "65%",
          //   justifyContent: "center",
          //   backgroundColor: "transparent",
          // }}
          className="carousel-projects"
        >
          {projects.map((project) => (
            <Carousel.Item
              key={project.id}
              style={{ backgroundColor: "var(--jasper)", borderRadius: 25 }}
            >
              <a href={project.link} target="_blank">
                <img
                  src={project.image}
                  className="d-block w-100 carousel-pic"
                  alt={project.name}
                  style={{ borderRadius: 25 }}
                />
              </a>
              <Carousel.Caption style={{ backgroundColor: "transparent" }}>
                <h3
                  className="caption-title"
                  style={{
                    color: "var(--pink)",
                    backgroundColor: "transparent",
                  }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-center"
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--buccaneer)",
                  }}
                >
                  {project.description}
                </p>
                <p
                  className="text-center"
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <small
                    style={{
                      backgroundColor: "transparent",
                      margin: 50,
                      color: "var(--buccaneer)",
                    }}
                  >
                    {project.languages}
                  </small>
                </p>
                {/* <div
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
                </div> */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "var(--jasper)",
                  }}
                >
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip className="custom-tooltip">
                        Live Application
                      </Tooltip>
                    }
                  >
                    <a href={project.link} target="_blank">
                      <img
                        src="./assets/webbutton.png"
                        style={circleButtonStyle}
                      />
                    </a>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip className="custom-tooltip">Repository</Tooltip>
                    }
                  >
                    <a href={project.repository} target="_blank">
                      <img
                        src="./assets/github.png"
                        style={circleButtonStyle}
                      />
                    </a>
                  </OverlayTrigger>
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
