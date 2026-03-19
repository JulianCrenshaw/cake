import React from 'react'
import Party from '../assets/party.png'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Landing = () => {
  return (
<section id='landing'>
<header>
    <div className="header__container">
        <div className="header__description">
            <h1>Satisfy your sweet tooth with our delicious Deserts!</h1>
            <h2>Find your sweets in our <span className="blue">Inventory</span></h2>
            <a href="#features">
                <button className="btn">Browse Deserts</button>
            </a>
        </div>
        <figure className="header__img--wrapper">
            <img src={ Party } alt="" />
        </figure>
    </div>
</header>
</section>
  )
}

export default Landing
