import React, { memo } from "react";
import logo from "../../assets/images/icon.jpg";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav" id="nav">
      <div className="container">
        <div className="nav__wrapper">
          <Link to="/">
            <img src={logo} alt="logo" className="nav__img" />
          </Link>
          <div className="nav__context">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink className="nav__link" to="/about">
                  <span className="nav__span">About</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="/projects">
                  <span className="nav__span">Projects</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" to="/contact">
                  <span className="nav__span">Contact</span>
                </NavLink>
              </li>
            </ul>
            <button className="nav__btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="rgba(255,255,255,0.8)"
                  d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Nav);
