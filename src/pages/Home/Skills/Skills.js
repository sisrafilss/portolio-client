import React from "react";

const Skills = () => {
  return (
    <div className="container mt-5">
      <div>
        <h2 className="text-light pt-5 text-center mb-0 display-4">My Skills</h2>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 p-5">
          <div className="mb-4">
            <p className="lead text-light mb-1">HTML</p>

            <div style={{ height: "10px" }} className="progress">
              <div
                className="progress-bar bg-success" 
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <p className="lead text-light mb-1">CSS</p>
            <div style={{ height: "10px" }} className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "85%" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <p className="lead text-light mb-1">Bootstrap</p>
            <div style={{ height: "10px" }} className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <p className="lead text-light mb-1">JavaScript</p>
            <div style={{ height: "10px" }} className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="mb-4">
            <p className="lead text-light mb-1">C</p>
            <div style={{ height: "10px" }} className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 p-5">
          <div className="mb-4">
            <p className="lead text-light mb-1">React JS</p>

            <div style={{ height: "10px" }} className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <p className="lead text-light mb-1">Express JS</p>
            <div style={{ height: "10px" }} className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "65%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <p className="lead text-light mb-1">Node JS</p>
            <div style={{ height: "10px" }} className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <p className="lead text-light mb-1">MongoDB</p>
            <div style={{ height: "10px" }} className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="mb-4">
            <p className="lead text-light mb-1">REST API</p>
            <div style={{ height: "10px" }} className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
