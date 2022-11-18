import React from "react";
import Title from "../components/Title";
import StoryContent from "../components/StoryContent";
import Section from "../containers/Section";

function description1() {
  return (
    <p className="long-text">
      Suivant la voie du coeur et le chant des émotions, je suis un homme qui
      oeuvre pour le retour du masculin sacré ainsi que son union avec le
      féminin dans leurs rôles divins.
      <br /> <br /> Je chemine sur une voie spirituelle depuis 2014, un moment
      dans lequel j’ai remis en question les dogmes et les idées qui m’ont été
      enseignés et ainsi j’ai choisi de construire ma propre route.
      <br /> <br /> J’incarne l’enfant du destin sur cette terre pour apporter
      les médecines du coeur ainsi que les enseignements sacrés qui s’y
      trouvent.
    </p>
  );
}

function description2() {
  return (
    <p className="long-text">
      En commençant par l’apprentissage de soins Reiki et des pratiques
      disciplinés, j’ai appris à comprendre le sens de mon existence pour sortir
      des sentiers battus et oeuvrer entièrement dans l’énergie.
      <br /> <br /> Ainsi j’ai dévoilé ma vraie nature spirituelle. J’ai
      pratiqué et découvert mes propres dons dans l’énergie pour retourner vers
      l’espace du coeur. J’ai ainsi reconnecté avec les médecines ancestrales de
      la rage du coeur et de l’énergie de vie.
      <br /> <br /> On me nomme le Grand Loup Protecteur qui tient l’espace
      sacré, un espace de respect, de croissance, de paix et/ou la vulnérabilité
      peut être vécue en toute sécurité. Grâce à ma connexion aux éléments, je
      transmets les consciences et connaissances cosmiques par de multiples
      types de soins énergétiques et vibratoires.
    </p>
  );
}

const storyData = [
  {
    name: "story-1",
    side: "default",
    description: description1(),
    img: require("../assets/bg/image_me_4.jpeg"),
    width: 450,
  },
  {
    name: "story-2",
    side: "reverse",
    description: description2(),
    img: require("../assets/bg/greece_3.png"),
    width: 400,
  },
];

function Story() {
  return (
    <>
      <Section id="story-section">
        <div className="container">
          <Title title="Mon histoire" />

          {storyData.map((data, index) => (
            <StoryContent key={index} {...data} />
          ))}
          
        </div>
      </Section>
    </>
  );
}
export default Story;
