function Footer() {
  return (
    <footer className="Footer">
      <ul className="nav justify-content-center">
        <li>
          <a
            href="https://github.com/danimsteger"
            target="_blank"
            className="nav-link"
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/daniellesteger217/"
            target="_blank"
            className="nav-link"
          >
            LinkedIn
          </a>
        </li>
        <li>
          {' '}
          <a
            href="mailto:daniellestegertutoring@gmail.com"
            className="nav-link"
          >
            {' '}
            Email
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
