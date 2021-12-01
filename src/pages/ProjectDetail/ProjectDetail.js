import { useParams } from "react-router-dom";
import useData from "../../data/fake_data";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { SRLWrapper } from "simple-react-lightbox";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const projects = useData();
  const project = projects.find((p) => parseInt(p.id) === parseInt(projectId));
  const { name, descriptions, images } = project;

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h2 className="text-light display-6">{name}</h2>
            <ul className="mt-4">
              {descriptions.map((d) => (
                <li className="text-light mb-3" key={d}>
                  {" "}
                  {d}{" "}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6 col-sm-12">
            <SRLWrapper>
              <div className="row g-4">
                <div>
                  <h2 className="text-white display-6 text-center">
                    Screenshots
                  </h2>
                  <p className="lead text-center text-light">
                    Click on image to see on full screen
                  </p>
                </div>
                {images.map((img) => (
                  <div key={img} className="col-md-6 col-sm-12">
                    <img
                      className="img-fluid"
                      src={img}
                      style={{ cursor: "pointer" }}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </SRLWrapper>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
