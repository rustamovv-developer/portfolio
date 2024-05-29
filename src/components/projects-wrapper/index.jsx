import React, { memo } from "react";
import Title from "../title";
import Next from "../next";

const ProjectsWrapper = () => {
  return (
    <div className="projects__wrapper" id="projects__wrapper">
      <Title title={"Projects"} />
      <div className="projects__box">
        <div className="projects__row"></div>
        <div className="projects__row"></div>
      </div>
      <Next next={"Lets Go To My Resume"} to={"/resume"} />
    </div>
  );
};

export default memo(ProjectsWrapper);
