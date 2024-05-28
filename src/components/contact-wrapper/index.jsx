import React, { memo } from "react";
import Title from "../title";
import Next from "../next";
import { Link } from "react-router-dom";

const ContactWrapper = () => {
  return (
    <div className="contact__wrapper" id="contact__wrapper">
      <Title title="Contact" />
      <p className="contact__text">
        Get in touch or shoot me an email directly on{" "}
        <Link
          className="contact__gmail"
          to={"https://rustamovv.developer@gmail.com"}
        >
          rustamovv.developer@gmail.com
        </Link>
      </p>
      <form action="" className="contact__context">
        <input type="text" placeholder="Name" className="contact__input" />
        <input type="email" placeholder="Email" className="contact__input" />
        <textarea placeholder="Message" className="contact__message"></textarea>
        <button className="contact__btn">Send Message</button>
      </form>
      <Next next={"Go Back Home"} to={"/"} />
    </div>
  );
};

export default memo(ContactWrapper);
