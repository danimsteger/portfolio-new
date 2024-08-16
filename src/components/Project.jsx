function Project({ project }) {
  return (
    <div className="card">
      <a href={project.link} target="_blank">
        <img src={project.image} alt={project.name} className="card-img-top" />
      </a>
      <div className="card-body ">
        <h3 className="card-title text-center">{project.name}</h3>
        <p className="text-center">{project.description}</p>
        <p className="text-center">
          <small className="text-body-secondary">{project.languages}</small>
        </p>
      </div>
      <div className="card-footer nav nav-underline justify-content-center">
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
      </div>
    </div>
  );
}

export default Project;
