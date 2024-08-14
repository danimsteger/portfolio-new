function Project({ project }) {
  return (
    <div className="card">
      <img src={project.image} alt={project.name} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{project.name}</h3>
        <p>{project.description}</p>
        <p>{project.languages}</p>
      </div>
      <div className="card-footer nav nav-underline">
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
