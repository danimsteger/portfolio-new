import { Link, useLocation } from 'react-router-dom';

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <div className="navbar container-fluid">
      <div>
        <a className="navbar-brand mx-">
          <img src="src/assets/mainphoto.png" height="150"></img>Danielle Steger
        </a>
      </div>
      <ul className="nav nav-underline">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/About"
            className={
              currentPage === '/About' ? 'nav-link active' : 'nav-link'
            }
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={
              currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={
              currentPage === '/Contact' ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={
              currentPage === '/Resume' ? 'nav-link active' : 'nav-link'
            }
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
