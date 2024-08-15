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
        <a href={project.link} target="_blank" className="nav-link">
          Live App
        </a>
        <a href={project.repository} target="_blank" className="nav-link">
          Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
