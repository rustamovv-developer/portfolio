import React, { memo } from "react";
import HomeTitle from "../home-title";
import HomeTexts from "../home-texts";
import Next from "../next";

const HomeWrapper = () => {
  return (
    <div className="home__wrapper" id="home__wrapper">
      <HomeTitle />
      <HomeTexts />
      <Next next={"See more about me"} to={"/about"} />
    </div>
  );
};

export default memo(HomeWrapper);
