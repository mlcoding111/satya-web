import React from "react";
import Title from "../components/Title";

function Contact() {
  return (
    <section id="contact-section">
      <Title title="Contact" />
      <p className="long-text">
      Vous pouvez me contacter sur les médias sociaux ou sur mon courriel en cliquant sur le bouton suivant :
        <div className="button-container">
          <a href="mailto:satyalariviere@outlook.com">
            <button className="button">Me contacter</button>
          </a>
        </div>
      </p>
    </section>
  );
}

export default Contact;
