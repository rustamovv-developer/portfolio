import React, { memo } from "react";
import "../../sass/components/_home-texts.scss";
import { Link } from "react-router-dom";

const HomeTexts = () => {
  return (
    <div className="home__texts" id="home__texts">
      <p className="home__text">
        Your friendly neighborhood frontend developer, UX architect and
        JavaScript engineer. I spend my days (and often my nights) surfing the
        web with{" "}
        <Link to="/projects" className="home__link">
          PROJECTS
        </Link>{" "}
        and lines of code.
      </p>
      <p className="home__text">
        I follow the path of minimalism, I find beauty in simplicity and order.
        When I'm not creating beautiful web experiences, you can find me reading{" "}
        <Link className="home__link">ARTICLES</Link>
        or swaying to Pop or Rap beats, losing myself to a flow of catchy tunes.
        anyway you can{" "}
        <Link to="/contact" className="home__link">
          CONTACT ME
        </Link>
      </p>
    </div>
  );
};

export default memo(HomeTexts);
