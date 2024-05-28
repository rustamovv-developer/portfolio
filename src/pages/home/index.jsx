import React, { memo } from "react";
import HomeWrapper from "../../components/home-wrapper";

const Home = () => {
  return (
    <main className="home" id="home">
      <div className="container">
        <HomeWrapper />
      </div>
    </main>
  );
};

export default memo(Home);
