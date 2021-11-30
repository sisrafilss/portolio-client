import React, { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./projects.css";
import horizon from "../../images/FitPal_Bicycle/1.fitpal_home.png";

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
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card project-card" id="project">
                <div
                  className="all-projects"
                  style={{
                    backgroundImage: `url(${projects[0]?.images?.image1})`,
                  }}
                ></div>
                <div class="card-body">
                  <div>
                    <h5 class="card-title text-center h2">
                      {" "}
                      {projects[0]?.name}{" "}
                    </h5>
                    <p class="card-text">{projects[0]?.description}</p>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://creative-agency-f6271.web.app/"
                      class="btn btn-primary"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="portfolio-icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
