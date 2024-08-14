import Project from '../components/Project';

const projects = [
  {
    id: 1,
    name: 'ReelTime 🎬',
    description: 'Full Stack Application',
    languages: 'JavaScript, Node.js, Express.js, Sequelize, Handlebars.js',
    link: 'https://movie-app-uu6k.onrender.com/',
    repository: 'https://github.com/danimsteger/movie-app',
    image: 'src/assets/reel.png',
  },
  {
    id: 2,
    name: 'Tech Blog',
    description: 'Full Stack Application',
    languages: 'JavaScript, Node.js, Express.js, Sequelize, Handlebars.js',
    link: 'https://tech-blog-4o3v.onrender.com',
    repository: 'https://github.com/danimsteger/tech-blog',
    image: 'src/assets/speech.png',
  },
];

export default function Portfolio() {
  return (
    <div>
      <h1> THIS WILL BE PORTFOLIO PAGE!!!</h1>
      <div className="card-group">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
