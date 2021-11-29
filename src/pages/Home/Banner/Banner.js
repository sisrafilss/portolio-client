import React from "react";
import "./Banner.css";
import israfil from "../../../images/Israfil-Hossen.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-5 col-sm-12">
            <div>
              <img
                className="img-fluid israfil"
                src={israfil}
                alt="Israfil Hossen"
              />
            </div>
          </div>
          <div className="col-md-7 col-sm-12">
            <div className="">
              <p className="h2 text-light">Hello, I'm</p>
              <h1 className="h1 display-4 fw-bold text-light">
                ISRAFIL HOSSEN
              </h1>
              <h3 className="text-info">MERN || Junior Web Developer</h3>
              <p className="text-light">
                I enjoy creating modern web applications. I have Deep knowledge
                and work with HTML 5, CSS 3, Bootstrap, JSX, JavaScript, ES6,
                React js. I also have Knowledge and proficiency with
                react-bootstrap, Material-UI, Redux, and server-side node.js,
                express.js, MongoDB.
              </p>
            </div>
            <div className="mt-4">
              <a href="https://www.linkedin.com/in/sisrafilss/" target="_blank">
                <i class="icon me-4 fab text-info fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/sisrafilss" target="_blank">
              <i class="icon me-4 fab text-info fa-github"></i>
              </a>
              <a href="https://web.facebook.com/sisrafilss" target="_blank">
              <i class="icon fab text-info fa-facebook-f"></i>
              </a>
            </div>
            <div className="mt-5">
            <a className="btn btn-success text-light me-4" target="_blank" href="https://drive.google.com/file/d/1q9nIN8OyD6fOtI1FaheotXewC59BL3vh/view?usp=sharing">
                  My Resume
                </a>
                <button className="btn btn-success">
                    <Link style={{textDecoration: 'none', color: "#fff"}} to="/contact">Contact</Link>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
