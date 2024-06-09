import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const AboutMe = () => {
  return (
    <>
      <Header />
      <div className="container py-5" style={{ color: "#fff" }}>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div
            //   className="card shadow-lg"
            //   style={{ backgroundColor: "#112240", borderColor: "#112240" }}
            >
              <div className="card-body">
                <h1
                  className="card-title text-center mb-4"
                  style={{ color: "#64ffda" }}
                >
                  About Me
                </h1>
                <p className="card-text">
                  I am a passionate and dedicated front-end web developer with a
                  keen interest in building user-friendly, responsive web
                  applications. Though I am currently seeking my first
                  professional opportunity, I have acquired a strong foundation
                  in web development through online courses and MOOCs,
                  particularly focusing on ReactJS for the front end.
                </p>

                <h3 className="mt-4" style={{ color: "#64ffda" }}>
                  Who I Am
                </h3>
                <p className="card-text">
                  As a self-taught developer, I have gained valuable skills and
                  practical experience by working on various projects. My most
                  advanced project features a comprehensive login and
                  registration system, including third-party login integration
                  with Google. It also includes a product section for
                  purchasing, a user dashboard for managing orders, and an admin
                  dashboard for product management. I used ReactJS and Tailwind
                  CSS for the front end and built the back end with ExpressJS,
                  creating REST APIs, and leveraging MongoDB for database
                  management.
                </p>

                <h3 className="mt-4" style={{ color: "#64ffda" }}>
                  What I Do
                </h3>
                <p className="card-text">
                  I aim to evolve into a dynamic problem solver and a proficient
                  full-stack developer. My future aspirations include becoming
                  an IT entrepreneur and investor, driving innovation, and
                  contributing to the tech industry in meaningful ways.
                </p>

                <h3 className="mt-4" style={{ color: "#64ffda" }}>
                  What I Know
                </h3>
                <p className="card-text">
                  Educationally, I completed my Higher Secondary Certificate
                  (HSC) from Bangladesh in 2017 with a science background. Due
                  to financial constraints, I couldn't immediately pursue a
                  university degree. However, my passion for technology led me
                  to enroll in the Complete Web Development Course by Jhankar
                  Mahbub at Programming Hero in 2021, from which I graduated.
                  Additionally, I have completed several technological courses
                  on MOOCs and Coursera to further enhance my skills.
                </p>

                <h3 className="mt-4" style={{ color: "#64ffda" }}>
                  Accomplishments & Awards
                </h3>
                <ul className="list-unstyled">
                  <li>
                    Developed a comprehensive web application with user
                    authentication, product management, and admin capabilities.
                  </li>
                  <li>
                    Successfully completed the Complete Web Development Course
                    by Jhankar Mahbub.
                  </li>
                  <li>
                    Graduated from various technological courses on MOOCs and
                    Coursera.
                  </li>
                </ul>

                <h3 className="mt-4" style={{ color: "#64ffda" }}>
                  Contact Details
                </h3>
                <ul className="list-unstyled">
                  <li>
                    <strong>Mobile:</strong>{" "}
                    <a
                      href="https://wa.me/+8801521410415"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#64ffda" }}
                    >
                      +8801521410415 (WhatsApp)
                    </a>
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:israfilhossen3@gmail.com"
                      style={{ color: "#64ffda" }}
                    >
                      israfilhossen3@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>GitHub:</strong>{" "}
                    <a
                      href="https://github.com/sisrafilss"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#64ffda" }}
                    >
                      https://github.com/sisrafilss
                    </a>
                  </li>
                </ul>

                <h3 className="mt-4" style={{ color: "#64ffda" }}>
                  Technical Skills
                </h3>
                <ul className="list-unstyled">
                  <li>ReactJS</li>
                  <li>Tailwind CSS</li>
                  <li>ExpressJS</li>
                  <li>MongoDB</li>
                  <li>NextJS</li>
                </ul>

                <h3 className="mt-4" style={{ color: "#64ffda" }}>
                  Personal Interests
                </h3>
                <p className="card-text">
                  In my free time, I enjoy reading both fiction and non-fiction,
                  including self-development and religious books. Cycling is
                  another hobby of mine that keeps me active and refreshed.
                </p>

                <p className="card-text">
                  I am eager to bring my skills, passion, and dedication to a
                  dynamic team where I can contribute and grow as a
                  professional. Let's connect and explore opportunities to
                  collaborate!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;
