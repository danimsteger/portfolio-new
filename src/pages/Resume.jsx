export default function Resume() {
  return (
    <div>
      <h1 className="text-center"> Resume</h1>
      <div className="m-4">
        <p className="text-center">
          Download a PDF of Danielles Resume&nbsp;
          <a
            href="../public/resume.portfolio.pdf"
            target="_blank"
            download="resume.portfolio.pdf"
          >
            here
          </a>
          .
        </p>
      </div>
      <div className="container">
        <div>
          <h3 className="text-center">Front-End Proficiencies</h3>
        </div>
        <div className="d-flex justify-content-center m-4">
          <button type="button" className="btn btn-outline-secondary mx-3">
            HTML
          </button>
          <button type="button" className="btn btn-outline-secondary mx-3">
            CSS
          </button>
          <button type="button" className="btn btn-outline-secondary mx-3">
            JavaScript
          </button>
          <button type="button" className="btn btn-outline-secondary mx-3">
            jQuery
          </button>
          <button type="button" className="btn btn-outline-secondary mx-3">
            React
          </button>
          <button type="button" className="btn btn-outline-secondary mx-3">
            Bootstrap
          </button>
        </div>
        <div>
          <h3 className="text-center">Back-End Proficiencies</h3>
        </div>
        <div className="d-flex justify-content-center m-4">
          <button type="button" className="btn btn-outline-secondary mx-3">
            APIs
          </button>
          <button type="button" className="btn btn-outline-secondary mx-3">
            Node
          </button>
          <button type="button" className="btn btn-outline-secondary mx-3">
            Express
          </button>
          <button type="button" className="btn btn-outline-secondary mx-3">
            MySQL
          </button>
          <button type="button" className="btn btn-outline-secondary mx-3">
            Sequelize
          </button>
          <button type="button" className="btn btn-outline-secondary mx-3">
            MongoDB
          </button>
          <button type="button" className="btn btn-outline-secondary mx-3">
            Mongoose
          </button>
          <button type="button" className="btn btn-outline-secondary mx-3">
            REST
          </button>
          <button type="button" className="btn btn-outline-secondary mx-3">
            GraphQL
          </button>
        </div>
      </div>
    </div>
  );
}
