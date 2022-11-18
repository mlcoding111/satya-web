import React from "react";
import Title from "../components/Title";
import Section from "../containers/Section";

function Soins() {
  return (
    <Section id="soins">
      <Title title="Soins individuels" />

      <img src={require("../assets/bg/me_1.png")} width="500" alt="soins" />

      <div className="soins-description">
        <p className="long-text">
          Ces soins ont pour but de permettre de visiter les parts en nous qui
          ont besoin de lumière pour libérer les énergies stagnantes et ainsi
          augmenter le taux vibratoire et accéder à une guérison des cellules
          énergétiques des corps subtils
        </p>
        <p className="long-text">
          Les soins sont disponibles à distance par appel vidéo et sont aux prix
          de 100 CAN et 100 Euro pour 30 minutes.
        </p>
      </div>
    </Section>
  );
}

export default Soins;
