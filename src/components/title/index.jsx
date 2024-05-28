import React, { memo } from "react";
import "../../sass/components/_title.scss";

const Title = ({ title }) => {
  return (
    <p className="title" id="title">
      {title}
    </p>
  );
};

export default memo(Title);
