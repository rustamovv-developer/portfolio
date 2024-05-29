import React, { memo } from "react";
import ProjectsWrapper from "../../components/projects-wrapper";
import "../../sass/pages/projects.scss";

const Projects = () => {
  return (
    <main className="projects" id="projects">
      <div className="container">
        <ProjectsWrapper />
      </div>
    </main>
  );
};

export default memo(Projects);
