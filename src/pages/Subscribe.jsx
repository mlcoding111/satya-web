import React from "react";
import Title from "../components/Title";
import StoryContent from "../components/StoryContent";

function description1() {
  return (
    <p className="long-text">
      Qu’est-ce que c’est ? Un abonnement mensuel donnant accès à des capsules
      vidéos et des vidéos en directe qui ont pour but de partager des
      enseignements de la voie du coeur. Il y aura 4 chapitres de trois mois
      suivant les saisons de l’année et ainsi 4 capsules en plus de deux vidéos
      en directe par mois. Par cet abonnement je favorise la guérison et la
      libérations de fréquences qui nous habitent par les experiences des vies
      antérieures et de celle-ci. Je vous invite à connecter aux éléments qui
      nous entourent pour invoquer leur magie cosmique et chamanique par des
      chants, des mouvements, soins et language de lumière comportant tous des
      codes bénéfiques pour la reconfiguration de notre structure énérgétique
      interne et externe. Je partagerai aussi mon experience qui m’a permis de
      discerner et de libérer les énergies en moi qui m’empêchaient de
      reconnaître ma propre valeur, grandeur et splendeur, pour ainsi déployer
      un chemin de vie unique à moi et magnétiser ce don j’ai besoin pour nourir
      celui-ci. Un message invoqué de chaque élément est nommé plus bas sur
      cette page.
    </p>
  );
}

function description2() {
  return (
    <p className="long-text">
      Pourquoi j’ai choisis de faire ceci ? À partir de mon chemin unique,
      jonché d’évolutions et de défis révélateur de ma nature cosmique et
      ancestrale, j’ai dans mon coeur une volonté immense d’incarner l’amour
      inconditionnel ainsi que la guérison du masculin sacré intérne (Que nous
      avons tous et toutes) et externe. Par cette volonté, j’accepte de tout
      coeur cet appel cosmique à accomplir une grande mission sur cette terre
      qui l’aidera à retrouver ces enfants de coeurs, les créateurs, les
      initiateurs, les guérisseurs, les musiciens et bien plus. Nous avons tous
      un rôle vital en ce monde et j’oeuvre pour accompagner les enfants des
      étoiles à cheminer avec les bons outils et surtout à avancer vers
      l’ouverture du coeur.
    </p>
  );
}

const storyData = [
  {
    name: "subscribe-1",
    side: "default",
    description: description1(),
    img: require("../assets/bg/greece_1.png"),
  },
  {
    name: "subscribe-2",
    side: "reverse",
    description: description2(),
    img: require("../assets/bg/me_3.png"),
  },
];

function Subscribe() {
  return (
    <section id="subscribe-section">
      <div className="container">
        <Title title="Abonnement" />

        {storyData.map((data, index) => (
          <StoryContent key={index} {...data} />
        ))}
      </div>
    </section>
  );
}

export default Subscribe;
