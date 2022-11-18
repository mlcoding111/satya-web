import React from 'react'


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
                <img src={link.src.default} alt={link.name} />
            </a>
        </li>
    ))
}


function Overlay() {
  return (
    <div className="overlay">
        <div className="overlay-content">
            <span></span>
            <ul className="social-links">
                {
                    renderSocialsLinks()
                }
            </ul>
            <span></span>
        </div>
    </div>
  )
}

export default Overlay