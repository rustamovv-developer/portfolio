import React, { memo } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__wrapper">
          <Link className="footer__link" to="">
            <FaFacebookF
              className="footer__icon"
              style={{ color: "#c6c6c6", fontSize: "16px" }}
            />
          </Link>
          <Link
            className="footer__link"
            to="https://www.linkedin.com/in/rustamov-xamidullox-417a912b5/"
          >
            <FaLinkedinIn
              className="footer__icon"
              style={{ color: "#c6c6c6", fontSize: "16px" }}
            />
          </Link>
          <Link
            className="footer__link"
            to="https://github.com/therealrustamovv"
          >
            <FaGithub
              className="footer__icon"
              style={{ color: "#c6c6c6", fontSize: "16px" }}
            />
          </Link>
          <Link className="footer__link" to="https://t.me/therealrustamovvv">
            <FaTelegram
              className="footer__icon"
              style={{ color: "#c6c6c6", fontSize: "16px" }}
            />
          </Link>
          <Link
            className="footer__link"
            to="https://www.instagram.com/rustamovv_developer/"
          >
            <FaInstagram
              className="footer__icon"
              style={{
                color: "#c6c6c6",
                fontSize: "16px",
              }}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
