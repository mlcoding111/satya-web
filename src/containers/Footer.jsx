import React from "react";

function Footer() {

  const links = [
    {
        name: "fb",
        src: require("../assets/socials/facebook.svg"),
        link: "https://www.facebook.com/satyalariviere"
    },
    {
        name: "insta",
        src: require("../assets/socials/instagram.svg"),
        link: "https://www.instagram.com/satyatavas"
    },
    {
        name: "patreon",
        src: require("../assets/socials/patreon.svg"),
        link: "https://www.patreon.com/satyatavas"
    },
]

  return (
    <footer>
      <h1>Satya</h1>
      <p className="long-text">
        Guide spirituel connectant avec les médecines du coeur oeuvrant pour
        l’éveil et l’incarnation des starseed.
      </p>
      <div className="footer-divider-container">
        <div className="footer-divider" id="divider-left"></div>
        <img src={require("../assets/svg/other/footer-eye.svg").default} id="footer-logo" alt="divider" width="240"/>
        <div className="footer-divider" id="divider-right"></div>
      </div>
      <div id="dev-wrap">Site conçu par: <span>Michael Lacroix</span></div>
    </footer>
  );
}

export default Footer;
