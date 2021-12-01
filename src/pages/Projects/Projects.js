import React, { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./projects.css";
import horizon from "../../images/FitPal_Bicycle/1.fitpal_home.png";
import Project from "../Project/Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("./fake_data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h2 className="text-light text-center mt-5 display-4">My Projects</h2>
      </div>
      <div>
        <div className="container mt-5 text-light">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {
              projects.map(project => <Project key={project.id} project={project} />)
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
