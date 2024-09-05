import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <div
      className="navbar container-fluid"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        backgroundColor: "var(--darkgreen)",
      }}
    >
      <div>
        <a className="navbar-brand mx-5" style={{ color: "var(--mint)" }}>
          Danielle Steger
        </a>
      </div>
      <ul className="nav nav-underline mx-5">
        <li className="nav-item ">
          <ScrollLink
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            className="nav-link"
          >
            About
          </ScrollLink>
        </li>

        <li className="nav-item">
          <ScrollLink
            to="portfolio-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            className="nav-link"
          >
            Portfolio
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
            to="experience-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            className="nav-link"
          >
            Experience
          </ScrollLink>
        </li>

        <li className="nav-item">
          <ScrollLink
            to="resume-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            className="nav-link"
          >
            Resume
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
