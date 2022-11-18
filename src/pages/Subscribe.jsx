import React from "react";
import Title from "../components/Title";
import StoryContent from "../components/StoryContent";
import Element from "../components/Element";
import Section from "../containers/Section";

function description1() {
  return (
    <p className="long-text">
      <strong>Qu’est-ce que c’est ? </strong>
      <br></br> <br></br>Un abonnement mensuel donnant accès à des capsules
      vidéos et des vidéos en direct qui ont pour but de partager des
      enseignements de la voie du coeur. <br></br> <br></br> Par cet abonnement
      je favorise la guérison et la libération de fréquences qui nous habitent
      par les expériences des vies antérieures et de celle-ci. Je vous invite à
      connecter aux éléments qui nous entourent pour invoquer leur magie
      cosmique et chamanique par des chants, des mouvements, soins et langages
      de lumière comportant toute des codes bénéfiques pour la reconfiguration
      de notre structure énergétique interne et externe. <br></br> <br></br> Je
      partagerai aussi mon expérience qui m’a permis de discerner et de libérer
      les énergies en moi qui m’empêchaient de reconnaître ma propre valeur,
      grandeur et splendeur, pour ainsi déployer un chemin de vie unique à moi
      et magnétiser ce don j’ai besoin pour nourrir celui-ci. <br></br>{" "}
      <br></br> Un message invoqué de chaque élément est nommé plus bas sur
      cette page.
    </p>
  );
}

function description2() {
  return (
    <p className="long-text">
      Pourquoi j’ai choisi de faire ceci ?<br></br> <br></br> À partir de mon
      chemin unique, jonché d’évolutions et de défis révélateurs de ma nature
      cosmique et ancestrale, j’ai dans mon coeur une volonté immense d’incarner
      l’amour inconditionnel ainsi que la guérison du masculin sacré interne
      (Que nous avons tous et toutes) et externe.<br></br> <br></br> Par cette
      volonté, j’accepte de tout coeur cet appel cosmique à accomplir une grande
      mission sur cette terre qui l’aidera à retrouver ces enfants de coeurs,
      les créateurs, les initiateurs, les guérisseurs, les musiciens et bien
      plus. Nous avons tous un rôle vital en ce monde et j’oeuvre pour
      accompagner les enfants des étoiles à cheminer avec les bons outils et
      surtout à avancer vers l’ouverture du coeur.
    </p>
  );
}

function description3() {
  return (
    <p className="long-text">
      <h2>Pourquoi s’abonner ?</h2>
      <br></br> <br></br>
      Il est temps de reprendre confiance et foi en votre propre pouvoir, votre
      propre potentiel. De conscientiser les peurs et les résistances qui vous
      empêchent de franchir le seuil de l’action et de l’envol. De prendre la
      route de l’action constante, de la patience que la tortue sacrée enseigne,
      de faire un pas à la fois dans l’équilibre et la certitude. Ce qui devient
      possible par l’abonnement mensuel de ces capsules magiques.
      <br></br> <br></br>
      Une constance de guérison et de discipline qui cultive la manifestation en
      nous et autour de nous, pour magnétiser la transformation ainsi que les
      transmutations nécessaires à la route unique que vous allez paver pour
      vous-même en cette incarnation sur terre. Une expérience nouvelle venant
      de la magie des éléments, de la puissance du coeur et de la résonnance du
      potentiel qui sommeille en vous. Vous méritez de savoir que votre valeur
      est incalculable, qu’elle est infinie.<br></br> <br></br> Je vous invite à
      rejoindre cette occasion unique et magique de suivre une progression en
      vous grâce à ces soins qui sont constants et exponentiels en puissance et
      à vivre ceci non seulement par ce que je vous offre, mais aussi par le
      partage avec les autres abonnés. Cette chance de grandir tous ensemble et
      de vous soutenir est une clé importante aujourd’hui dans ce monde
      individualiste et de comparaison. Il est crucial d’apprendre ce que c’est
      de vivre un chemin sacré parmi d’autres dans le respect et le
      non-jugement.<br></br> <br></br> C’est une chance de se voir sous un
      nouveau regard chaque mois, de se renouveler et de constater une évolution
      en nous et dans nos actions ainsi que nos paroles. Ce monde dans lequel
      nous vivons est en grande transition et ce qui s’envient est inimaginable,
      avec ces clés et ce soutien, je vise à réaliser un renforcement positif et
      un soutien du coeur de mes frères et soeurs de lumière qui œuvrent en eux
      pour cultiver une vie libre et saine.
    </p>
  );
}

function description4() {
  return (
    <p className="long-text" style={{ marginTop: "50px" }}>
      <h2>Qu’est-ce que cela contient ?</h2> <br></br> <br></br>
      Il y a dans ce trésor deux niveaux d’abonnement disponibles.<br></br>{" "}
      <br></br> La Racine argentée, qui donne accès à deux capsules par mois contenant clés, soins, conseils, activations et outils ainsi qu’une communauté pour échanger entre vous, poser des questions et déposer vos expériences ainsi que vos émotions. Cet espace d’échange est un endroit de respect et de confiance sécuritaire pour se soutenir dans notre cheminement ainsi que créer des connexions bénéfiques.<br></br> <br></br>{" "}
      Ce niveau est offert au prix mensuel de 27$+ taxes.<br></br> <br></br>La Racine dorée qui donne accès aux capsules mensuelles ainsi qu’à la communauté d’échange tout comme la Racine argentée en plus d’une vidéo en direct à la fin de chaque mois. La vidéo en direct sera une finalité sur les capsules du mois et comportera des soins et codes supplémentaires. Il y aura aussi une salle de chat unique pour échanger sur les capsules en direct des fins de mois.
      <br></br> <br></br> Ce niveau est offert au prix mensuel de 44$+ taxes.
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

function airDescription() {
  return (
    <p className="long-text">
      L’élément Air apporte l’agilité d’esprit, la rapidité et la fluidité qui
      permet au corps et à l’esprit d’avancer avec légèreté, il représente la
      fougue et le courage des grands vents qui traversent les contrées sans
      cesse en purifiant les airs.
      <br></br> <br></br>
      Ses mouvements sont rapides et légers, agiles et imprévisibles.
    </p>
  );
}

function fireDescription() {
  return (
    <p className="long-text">
      L’élément Feu exprime l’explosion et la volonté dans l’action et la
      détermination, il permet l’expression ferme de l’opinion par la voix ainsi
      que par les gestes. Son pouvoir de purification est dans l’intensité et
      permet d’apporter la lumière ainsi que la pureté.
      <br></br>
      <br></br> Ses mouvements sont explosifs et définitifs, secs et fermes.
    </p>
  );
}

function earthDescription() {
  return (
    <p className="long-text">
      L’élément Terre est représentatif de l’ancrage, de la solidité face aux
      intempéries et à la force de la connexion aux racines de Gaïa, de son
      énergie de transmutation et de transmission des sagesses anciennes.
      <br></br> <br></br> Ses mouvements sont lent et ancrés, riches et entre
      l’arrêt et le mouvement.
    </p>
  );
}

function waterDescription() {
  return (
    <p className="long-text">
      L’élément Eau représente la souplesse et la purification par le mouvement
      continu, de se mouvoir dans les situations en prenant de multiples formes
      pour s’adapter sans se briser, elle apporte la résilience et la force de
      l’océan inépuisable.
      <br></br> <br></br>Ses mouvements sont fluides et souples, en continu et
      posés.
    </p>
  );
}

const elementData = [
  {
    img: require("../assets/svg/elements/element_air.svg"),
    description: airDescription(),
  },
  {
    img: require("../assets/svg/elements/element_feu.svg"),
    description: fireDescription(),
  },
  {
    img: require("../assets/svg/elements/element_terre.svg"),
    description: earthDescription(),
  },
  {
    img: require("../assets/svg/elements/element_eau.svg"),
    description: waterDescription(),
  },
];

function renderContent(data, index) {
  return (
    <div key={index}>
      <StoryContent key={index} {...data} />
      {index === 0 ? renderButton() : null}
    </div>
  );
}

function renderButton() {
  return (
    <div className="button-container">
      <a href="https://www.patreon.com/satyatavas">
        <button className="button">Abonne toi à mon Patreon</button>
      </a>
    </div>
  );
}

function Subscribe() {
  return (
    <Section id="subscribe-section">
      <div className="container">
        <Title title="Abonnement" />

        {storyData.map((data, index) => renderContent(data, index))}

        {description3()}

        {description4()}
        {renderButton()}
        <div className="elements-container">
          {elementData.map((data, index) => (
            <div key={index}>
              <Element key={index} {...data} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Subscribe;
