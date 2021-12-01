import React from "react";
import { Link } from "react-router-dom";
import "./TopProjects.css";

const TopProjects = () => {
  return (
    <div className="container my-5">
      <div>
        <h2 className="display-4 text-light text-center mb-5">
          Recent Projects
        </h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <div className="projects project-1"></div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                {" "}
                <h5 className="card-title text-light ">FitPal Bicycle</h5>
                <button className="btn btn-success btn-sm">Detail</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="projects project-2"></div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title text-light">Horizon Delivery</h5>
                <Link to="/projects" className="btn btn-success btn-sm">Detail</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="projects project-3"></div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title text-light">Sundarban Healthcare</h5>
                <Link to="/projects" className="btn btn-success btn-sm">Detail</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProjects;
