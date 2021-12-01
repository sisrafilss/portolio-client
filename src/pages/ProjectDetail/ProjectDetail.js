import { useParams } from "react-router-dom";
import useData from "../../data/fake_data";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const projects = useData();
  const project = projects.find((p) => parseInt(p.id) === parseInt(projectId));
  const { name, description, images, links } = project;

  return (
    <div>
      <Header />
      <h2 className="text-light text-center mt-5">
        {name}
      </h2>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
