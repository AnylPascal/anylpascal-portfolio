import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/headshotnew.png'
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    <header> 
      <div className= "container header__container">
        <h5>Hello I'm</h5>
        <h1>Anyl Pascal</h1>
        <h5 className="text-light">Fullstack Developer </h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
            <img style={{ width: 350, height: 400, marginLeft: 290}} src={ME} alt="me" />
        </div>

        {/* DON'T FORGET TO INLINE STYLE THE SIZE OF THE PHOTO */}


        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header