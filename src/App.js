import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Projects from "./pages/Projects/Projects";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
