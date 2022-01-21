import React from "react";
import { Link } from "react-router-dom";
import useData from "../../../data/fake_data";
import "./TopProjects.css";

const TopProjects = () => {
  const projects = useData();

  const TopProjects = [];
  for (let i = 0; i < 3; i++) {
    TopProjects[i] = projects[i];
  }

  // fullScreenshot

  return (
    <div className="container my-5">
      <div>
        <h2 className="display-4 text-light text-center mb-5">
          Recent Projects
        </h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {TopProjects.map((project) => (
          <div className="col">
            <div className="card">
              <div
                className="projects"
                style={{ backgroundImage: `url(${project.fullScreenshot})` }}
              ></div>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  {" "}
                  <h5 className="card-title text-light "> {project.name} </h5>
                  <Link
                    to={`/projects/${project.id}`}
                    className="btn btn-success btn-sm"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="d-grid gap-2 mx-auto mt-5">
        <Link to="/projects" className="btn btn-lg btn-outline-success">
          All Projects
        </Link>
      </div>
    </div>
  );
};

export default TopProjects;
