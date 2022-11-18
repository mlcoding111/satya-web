import React from "react";
import Title from "../components/Title";
import Section from "../containers/Section";

function Accompany() {

const scrollToBottom = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}
  return (
    <Section id="accompany">
      <Title title="Infuser sa volonté" />
      <div className="accompany-description">
        <div className="description-container">
          <p className="long-text">
            Infuser un des plus grands pouvoirs en cette vie, la volonté.<br/><br/> Nous
            venons au monde avec un long chemin devant nous, un chemin qui nous
            appartient entièrement.<br/><br/> Nous arrivons en cette vie avec une grande
            quête qui semble infinie.<br/><br/> Infinie de rencontres, de découvertes. Une
            route qui mène toujours vers des prises de conscience face à
            nous-mêmes ou aux autres.<br/><br/> Demain nous offrira toujours une ou deux
            surprises et plus nous sommes outillés, mieux nous pourrons faire face
            à cette magnifique aventure.<br/><br/> Par la force pure de l’univers que nous
            sommes, une infinité de possibilités s’offrent à nous.<br/><br/> Ainsi, une
            infinité de résistances, de peurs et de blocages se présentent pour
            nous mettre à l’épreuve.<br/><br/> Procrastiner et douter, se mettre en
            réflexion sans prendre de décision ou se mettre en action. <br/><br/>Infuser
            sa volonté est ce qui nous permet de surpasser ces montagnes et de
            les voir avec les yeux du discernement et du cœur.
          </p>
           <button onClick={ () => scrollToBottom("price")}>Je m'inscris!</button>
          <img
            src={require("../assets/accompany/me.jpeg")}
            alt="Satya Tavas"
            width="450"
          />
        </div>

        <div className="description-container">
          <p className="long-text">
            Pour honorer ma grande quête, j’ai choisi Satya pour me présenter
            dans toute l’authenticité de mon existence. Un mot ancien qui
            signifie «être vrai».<br/><br/> Je suis ici pour explorer cette vie avec tout
            le courage qui m’a été attribué dans mes multiples passages.<br/><br/> Pour ne
            jamais abandonner l’expansion du cœur infini.<br/><br/> Et ici, je suis là
            pour vous offrir ce que j’ai cueilli, ce que j’ai cultivé dans ce
            grand jardin cosmique en moi.<br/><br/> Par la sagesse que l’expérience et la
            connaissance ont forgée, j’ai entrepris la création de 15 puissants
            soins sous forme de vidéos.<br/><br/> Ces créations venant de toute la volonté
            de permettre et de soutenir la croissance de vos cœurs. <br/><br/>Dans la
            grande forge des éléments et des créatures de magie. <br/><br/>Chacun des mots
            dits, des chants et fréquences. Chacun des mouvements et des
            enseignements sont infusés de l’amour pour les êtres de lumière en
            cheminement.<br/><br/> En tant que forgeron des éléments, je vous invite à
            poursuivre votre route avec ces clés.
          </p>
          <img
            src={require("../assets/accompany/2.jpeg")}
            alt="Satya Tavas"
            width="450"
          />
            <button onClick={ () => scrollToBottom("price")}>Je m'inscris!</button>
        </div>

        <div className="description-container">
          <p className="long-text">
            Infuser sa volonté est composé de 3 chapitres d’intégration.
            <br/><br/>
            – Créer l’espace
            <br/>
            – Invoquer la flamme 
            <br/>
            – Manifester la volonté
            <br/>
            <br/>
            Chaque chapitre sera couronné par un soin d’intégration en direct avec moi
            dans ma forge intérieure. <br/><br/>Ce total de 15 coffres aux trésors infusés
            de la puissance des éléments et des guerriers et guerrières qui
            m’ont soutenu est pour vous.<br/><br/> Ils sont forgés, lumineux, prêts à être
            intégrés dans vos cellules, dans vos cœurs avec ouverture et
            constance. Vous êtes ces êtres magiques que j’observe cheminer
            courageusement depuis si longtemps. Vous êtes ces univers de magie
            et d’amour pour lesquels j’ai tant d’espoir et de foi. Ceux pour
            lesquels je n’abandonnerai jamais ma propre route pour vous soutenir
            sur cette terre jusqu’au bout.<br/><br/> En l’honneur de votre beauté, En
            l’honneur de votre puissance, En l’honneur de votre courage.<br/><br/> Je vous
            accueille dans ces magnifiques rituels de puissance.
          </p>
          <img
            src={require("../assets/accompany/3.jpeg")}
            alt="Satya Tavas"
            width="450"
          />

        </div>

        <div className="description-container">
          <p className="long-text">
            Au fil des 5 parties de chaque chapitre, nous traverserons la route
            pour bâtir et retrouver un espace sacré en nous. <br/><br/>Nous irons à la
            recherche des éléments et des ingrédients nécessaires à la création
            d’un grand centre coloré. Et ce, ensemble.<br/><br/> Pour infuser cette
            volonté en nous, nous devons absorber sa présence, et être témoins
            de sa naissance.<br/><br/> De comprendre où elle se situe pour se retrouver
            grande et libre en nous, nous offre la vision de son pouvoir. Nous
            allons donc comprendre pourquoi cette volonté est si vitale dans
            notre grande quête de la vie.<br/><br/><br/><br/> Nos actions les plus décisives et
            victorieuses sont issues de la volonté la plus pure. Pour mettre en
            action ce pouvoir créateur que vous développez ou avez développé, la
            volonté est le plus grand allié.<br/><br/> Dans les instants de notre vie où
            les vagues sont incommensurables, ou les défis nous dévorent. <br/><br/>Nous
            pouvons nous sentir seuls, démunis.<br/><br/> Cela prend le plus grand des
            courages pour continuer à avancer et se relever la tête haute.<br/><br/> Ce
            sera un honneur pour moi de vous offrir les plus grandes clés que
            j’ai en moi face à ces grandes vagues immenses. <br/><br/>Pour vous faire
            savoir que vous n’êtes pas seulement soutenus, mais capable de vous
            soutenir vous-même. De vous regarder fièrement dans la glace et de
            savoir qu’en vous se trouve la beauté éternelle et fleurissante de
            cet univers. Que vous méritez le plus grand et le plus beau.<br/><br/> Mais
            pour ce faire, nous devons y mettre du cœur.<br/><br/> Voilà l’une des
            multiples raisons pour laquelle j’ai l’immense joie de vous faire
            vivre cet accompagnement. Qui vous portera à retrouver quelque chose
            que vous avez oublié en vous.<br/><br/><br/><br/> Recevoir de l’amour.<br/> Vous en donner.<br/><br/>
            Ressentir la force qui bouille en vous.<br/> L’exprimer justement.
            Marcher la tête haute.<br/> Se relever avec courage.<br/> Rester humble.<br/>
            Soutenir votre propre chemin. <br/><br/>Ainsi, pouvoir soutenir les êtres
            aimés, le moment venu. Vous voilà à ce merveilleux moment. Bienvenue
            à vous, vaillants êtres du cœur.<br/><br/> Vous êtes là pour surpasser le
            précipice du doute et de l'attente infinie. Pour faire le pont vers
            une confiance en soi et une résolution sans faille.<br/><br/> Infuser sa
            volonté est pour vous.
          </p>
          <img
            src={require("../assets/accompany/4.jpeg")}
            alt="Satya Tavas"
            width="450"
          />
        </div>

        <div className="description-container">
          <p className="long-text">
            Cet accompagnement débute le 29 novembre et prend fin le 20
            décembre. <br/><br/> Celui-ci contient :<br/><br/> 4 Capsules vidéo et une capsule en
            direct par semaine.<br/> Toutes déposées chaque lundi.<br/><br/> Il est important
            de savoir que ceci prendra forme sur un groupe Facebook exclusif aux
            membres de l'accompagnement.<br/> Il y aura un espace pour échanger et
            poser vos questions sur ce groupe.<br/><br/> J’y serai présent pour interagir
            et répondre aux questions selon un horaire qui sera partagé sur le
            groupe.<br/><br/> Toutes les capsules peuvent être visionnées à votre rythme.
          </p>
          <p className="long-text price-text" >
           
            *Bien vérifier d'inscrire votre adresse Courriel lors du paiement.
            (Un espace alloué pour un message est disponible sur l'onglet
            paiement)<br/><br/> 

            <br/>
            Le prix d’inscription est de 333 +tx = <span>282.95 € |</span><span> 382.87$</span> 
          </p>
          <a href="https://www.paypal.com/paypalme/satyatavas" id="price"><button>Je m'inscris!</button></a>
        </div>
      </div>
    </Section>
  );
}

export default Accompany;
