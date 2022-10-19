import React from 'react'
import './header.css'
import CTA from './CTA'
import FaceCard from './FaceCard'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header> 
      <div className= "container header__container">
        <h5>Salutations I'm</h5>
        <h1>Anyl Pascal</h1>
        <h5 className="text-light">Software Engineer | Security Engineer </h5>
        <CTA />
        <HeaderSocials />
        <FaceCard />

        

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header