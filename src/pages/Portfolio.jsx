import Project from '../components/Project';

const projects = [
  {
    id: 1,
    name: 'ReelTime 🎬',
    description: 'Full Stack Application',
    languages: 'JavaScript, Node.js, Express.js, Sequelize, Handlebars.js',
    link: 'https://movie-app-uu6k.onrender.com/',
    repository: 'https://github.com/danimsteger/movie-app',
    image: './assets/reel.png',
  },
  {
    id: 2,
    name: 'Tech Blog',
    description: 'Full Stack Application',
    languages: 'JavaScript, Node.js, Express.js, Sequelize, Handlebars.js',
    link: 'https://tech-blog-4o3v.onrender.com',
    repository: 'https://github.com/danimsteger/tech-blog',
    image: './assets/speech.png',
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    description: 'Third-Party API Integration',
    languages: 'HTML, CSS, JavaScript, jQuery, dayjs, Bootstrap',
    link: 'https://danimsteger.github.io/weather-dashboard',
    repository: 'https://github.com/danimsteger/weather-dashboard',
    image: './assets/weather.png',
  },
  {
    id: 4,
    name: '☀︎  MotivAction',
    description: 'Interactive Front-End App',
    languages: 'JavaScript, HTML, jQuery, Bulma',
    link: 'https://danimsteger.github.io/motivaction/',
    repository: 'https://github.com/danimsteger/motivaction',
    image: './assets/motiv2.png',
  },
  {
    id: 5,
    name: 'Employee Tracker',
    description: 'Command-Line Application',
    languages: 'JavaScript, SQL, Express.js, Node.js, Inquirer',
    link: 'https://drive.google.com/file/d/1r6mD8iPLumYyfLTntgI6QW7Ca7gprsKV/view?pli=1',
    repository: 'https://github.com/danimsteger/sql-employee-tracker',
    image: './assets/employee.png',
  },
  {
    id: 6,
    name: 'My First Blog',
    description: 'Web API Integration',
    languages: 'JavaScript, HTML, CSS',
    link: 'https://danimsteger.github.io/my-blog/',
    repository: 'https://github.com/danimsteger/my-blog',
    image: './assets/speech.png',
  },
];

export default function Portfolio() {
  return (
    <div>
      <h1 className="text-center"> Portfolio</h1>
      <div className="card-group">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
