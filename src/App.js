import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects/Project";
import Contact from "./components/Contact";
import Navbar from "./components/navbar/Navbar";
import ProjectSection from "./components/Projects/ProjectSection";

import { Routes, Route } from "react-router-dom";
import jsonData from "./json/data.json";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Main />
              <AboutMe />
              <Projects />
              <Contact />
            </>
          }
        />
        {jsonData.map((project) => {
          return (
            <Route
              key={project.projectId}
              path={project.projectLink}
              element={
                <ProjectSection
                  projectImage={project.projectImage}
                  projectName={project.projectName}
                  projectGithubLink={project.projectGithubLink}
                  projectDescription={project.projectDescription}
                  projectLanguage={project.projectLanguage}
                  projectLiveLink={project.projectLiveLink}
                />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
