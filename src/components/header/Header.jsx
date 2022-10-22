import React from 'react'
import './header.css'
import CTA from './CTA'
import FaceCard from './FaceCard'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header> 
      <div className= "container header__container">
        <h5 style={{color:'black'}}>Salutations I'm</h5>
        <h2 style={{color:'black'}}>Anyl Pascal</h2>
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