import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <div className="p-4 m-5 box-shadow text-center">
            
              {/* <p className="text-light lead">Address</p> */}
              <p className="text-light lead">Koyra, Khulna</p>
              <p className="text-light lead">Bangladesh</p>
            </div>
            <div className="p-4 m-5 box-shadow tex-center">
              <p className="text-light lead">israfilhossen3@gmail.com</p>
            </div>
            <div className="p-4 m-5 box-shadow text-center">
              <p className="text-light lead">+880-1701-084415</p>
            </div>
          </div>
          <div className="col-md-7 col-sm-12">
            <h2 className="display-6 text-light text-center">Wanna Contact Me</h2>
            <div className="box-shadow mt-4">
                <h3 className="text-white text-center pt-4" style={{opacity: "0.8"}}>Fill Up the Form and Submit</h3>
              <form className="p-4">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your Email Address"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div class="mb-3">
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
