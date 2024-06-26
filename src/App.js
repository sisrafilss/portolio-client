import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Projects from "./pages/Projects/Projects";
import NotFound from "./pages/NotFound/NotFound";
import './App.css';
import Contact from "./pages/Contact/Contact";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
