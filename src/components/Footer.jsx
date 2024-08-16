function Footer() {
  return (
    <footer className="Footer fixed-bottom  ">
      <ul className="nav justify-content-center p-4">
        <li className="">
          <a
            href="https://github.com/danimsteger"
            target="_blank"
            className="nav-link footer-link"
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/daniellesteger217/"
            target="_blank"
            className="nav-link footer-link"
          >
            LinkedIn
          </a>
        </li>
        <li>
          {' '}
          <a
            href="mailto:daniellestegertutoring@gmail.com"
            className="nav-link footer-link"
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
