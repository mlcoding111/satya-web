import React from 'react'

function Header() {
  return (
    <header>
      <div className="header-top">
        <h1>Satya</h1>
        <h2>Grand loup protecteur</h2>
      </div>
      <div className="arrow">
        <svg
          width="24"
          height="34"
          viewBox="0 0 24 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9393 33.0607C11.5251 33.6464 12.4749 33.6464 13.0607 33.0607L22.6066 23.5147C23.1924 22.9289 23.1924 21.9792 22.6066 21.3934C22.0208 20.8076 21.0711 20.8076 20.4853 21.3934L12 29.8787L3.51472 21.3934C2.92893 20.8076 1.97918 20.8076 1.3934 21.3934C0.807612 21.9792 0.807612 22.9289 1.3934 23.5147L10.9393 33.0607ZM10.5 0L10.5 32H13.5L13.5 0L10.5 0Z"
            fill="white"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header