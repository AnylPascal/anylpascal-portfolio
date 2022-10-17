import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/app.svg'
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    <header> 
      <div className= "container header__container">
        <h5>Salutations World I'm</h5>
        <h1>Anyl Pascal</h1>
        <h5 className="text-light">Software Engineer | Security Engineer </h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
            <img src={ME} viewBox="0 0 300 600"
    preserveAspectRatio="xMidYMid meet" alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header