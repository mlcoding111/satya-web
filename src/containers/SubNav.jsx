import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useWindowDimensions from '../hooks/useWindowSize';

function SubNav() {
  const { width } = useWindowDimensions();

  const [isToggled, setIsToggled] = React.useState(false);
  
  React.useEffect(() => {
    if(width >= 768) {
      setIsToggled(false);
    }
  }, [width]);

  const links = [
    {
        name: "fb",
        src: require("../assets/socials/facebook.svg"),
        link: "https://www.facebook.com/satyatavas"
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

function renderSocialsLinks(){
    return links.map((link, index) => (
        <li key={index}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
                <img src={link.src.default} alt={link.name} width="30"/>
            </a>
        </li>
    ))
}

  const handleToggle = e => {
    setIsToggled(current => !current); 
  }

  const handleLinkClick = e => {
    setIsToggled(false);
    window.scrollTo(0, window.innerHeight - 200);   

    if(window.innerHeight < 800){
      window.scrollTo(0, window.innerHeight - 100);   
    }
  }
  return (
    <nav>

      <div id="nav-toggler" className={isToggled ? "open" : ""} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={isToggled ? "nav-list toggled" : 'nav-list'}>
        <li className={""}><NavLink activeclassname="active" onClick={handleLinkClick} to={"/"}>Mon histoire</NavLink></li>
        <li className={""}><NavLink activeclassname="active" onClick={handleLinkClick} to={"/acompagnement"}>Accompagnement</NavLink></li>
        <li className={""}><NavLink activeclassname="active" onClick={handleLinkClick} to={"/abonnement"}>Abonnement</NavLink></li>
        <li className={""}><NavLink activeclassname="active" onClick={handleLinkClick} to={"/temoignages"}>Témoignages</NavLink></li>
        <li className={""}><NavLink activeclassname="active" onClick={handleLinkClick} to={"/soins"}>Soins individuels</NavLink></li>
        <li className={""}><NavLink activeclassname="active" onClick={handleLinkClick} to={"/contact"}>Contact</NavLink></li>
      </ul>
      
      <ul className={!isToggled ? "social-nav show" : 'social-nav hide'}>
       {
        renderSocialsLinks()
       }
      </ul>
{/* 
      <ul className={!isToggled ? "toggled" : ''}>
        {
            renderSocialsLinks()
        }
      </ul> */}
    </nav>
  )
}

export default SubNav