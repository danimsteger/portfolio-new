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
        backgroundColor: "var(--jasper)",
      }}
    >
      <div>
        <a
          className="navbar-brand mx-5 calistoga-regular"
          style={{ color: "var(--peachfuzz)" }}
        >
          D M S
        </a>
      </div>
      <ul className="nav nav-underline mx-5 ">
        <li className="nav-item ">
          <ScrollLink
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            className="nav-link calistoga-regular"
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
            className="nav-link calistoga-regular"
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
            className="nav-link calistoga-regular"
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
            className="nav-link calistoga-regular"
          >
            Skills
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
