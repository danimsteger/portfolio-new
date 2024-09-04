import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <div className="navbar container-fluid">
      <div>
        <a className="navbar-brand mx-5">Danielle Steger</a>
      </div>
      <ul className="nav nav-underline mx-5">
        <li className="nav-item ">
          {/* <Link
            to="/About"
            className={
              currentPage === "/" || currentPage === "/About"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About Me
          </Link> */}

          <ScrollLink
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={
              currentPage === "/" || currentPage === "/About"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </ScrollLink>
        </li>

        <li className="nav-item">
          {/* <Link
            to="/Portfolio"
            className={
              currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </Link> */}
          <ScrollLink
            to="portfolio-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={
              currentPage === "/" || currentPage === "/Portfolio"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Portfolio
          </ScrollLink>
        </li>
        {/* <li className="nav-item">
          <Link
            to="/Contact"
            className={
              currentPage === '/Contact' ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </Link>
        </li> */}
        <li className="nav-item">
          {/* <Link
            to="/Resume"
            className={
              currentPage === "/Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </Link> */}
          <ScrollLink
            to="resume-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={
              currentPage === "/" || currentPage === "/Resume"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Resume
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
