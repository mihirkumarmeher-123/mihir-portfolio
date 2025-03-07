/**
 * @copyright 2025 Mihir kumar Meher
 * @license Apache-2.0
 */

/**
 * Components
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/text_to_speech.png",
    title: "Text To Speech Convertor",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/mihirkumarmeher-123/text_to_speech.git",
  },
  {
    imgSrc: "/images/movie-app.png",
    title: "movie-app",
    tags: ["Web-design", "Development"],
    projectLink: "https://mihirkumarmeher-123.github.io/movie-app/",
  },
  {
    imgSrc: "/images/react-responsive-demo-app.png",
    title: "React Responsive Demo App",
    tags: ["React", "Tailwindcss", "GSAP", "Development"],
    projectLink: "https://react-responsive-demo-app.onrender.com",
  },
  {
    imgSrc: "/images/todo.png",
    title: "Todo App",
    tags: ["Design", "Development"],
    projectLink: "https://github.com/mihirkumarmeher-123/todo-app.git",
  },
  {
    imgSrc: "/images/weather_app.png",
    title: "Weather App",
    tags: ["Web-design", "API", "Development"],
    projectLink: "https://github.com/mihirkumarmeher-123/weather-app.git",
  },
  {
    imgSrc: "/images/password-generator.png",
    title: "Password generator App",
    tags: ["web design", "Development"],
    projectLink: "https://mihirkumarmeher-123.github.io/password-generator",
  },
];

function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
