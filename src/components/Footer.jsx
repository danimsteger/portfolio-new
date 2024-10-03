import { Tooltip, OverlayTrigger } from "react-bootstrap";

function Footer() {
  const circleButtonStyle = {
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--pink)",
    color: "var(--peachfuzz)",
    border: "none",
    cursor: "pointer",
    margin: 10,
  };
  return (
    <footer className="Footer   ">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "var(--pink)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip className="custom-tooltip">Github</Tooltip>}
        >
          <a href="https://github.com/danimsteger" target="_blank">
            <img src="./assets/github.png" style={circleButtonStyle} />
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip className="custom-tooltip">LinkedIn</Tooltip>}
        >
          <a
            href="https://www.linkedin.com/in/daniellesteger217/"
            target="_blank"
          >
            <img src="./assets/linkedin1.png" style={circleButtonStyle} />
          </a>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip className="custom-tooltip">Email</Tooltip>}
        >
          <a href="mailto:daniellestegertutoring@gmail.com" target="_blank">
            <img src="./assets/email.png" style={circleButtonStyle} />
          </a>
        </OverlayTrigger>
      </div>
    </footer>
  );
}

export default Footer;
