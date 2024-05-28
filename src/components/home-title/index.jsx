import React, { memo } from "react";
import "../../sass/components/_home-title.scss";

const HomeTitle = () => {
  return (
    <h1 className="home__title" id="home__title">
      I'm Rustamov Xamidullox
    </h1>
  );
};

export default memo(HomeTitle);
