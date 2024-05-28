import React, { memo } from "react";
import ContactWrapper from "../../components/contact-wrapper";

const Contact = () => {
  return (
    <main className="contact" id="contact">
      <div className="container">
        <ContactWrapper />
      </div>
    </main>
  );
};

export default memo(Contact);
