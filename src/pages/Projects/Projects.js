import useData from "../../data/fake_data";
import Project from "../Project/Project";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./projects.css";

const Projects = () => {
  const projects = useData();

  return (
    <div>
      <Header />
      <div>
        <h2 className="text-light text-center mt-5 display-4">My Projects</h2>
      </div>
      <div>
        <div className="container mt-5 text-light">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
