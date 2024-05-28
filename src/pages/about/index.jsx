import React, { memo } from "react";
import "../../components/about-wrapper";
import AboutWrapper from "../../components/about-wrapper";

const About = () => {
  return (
    <main className="about" id="about">
      <div className="container">
        <AboutWrapper />
      </div>
    </main>
  );
};

export default memo(About);
