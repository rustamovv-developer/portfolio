import React, { memo } from "react";
import "../../sass/components/_next.scss";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Next = ({ next, to }) => {
  return (
    <Link to={to} className="next" id="next">
      {next}
      <FaArrowRight style={{ fontSize: "20px" }} />
    </Link>
  );
};

export default memo(Next);
