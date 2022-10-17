import React from 'react'
import './header.css'
import CTA from './CTA'
import CustomPhoto from './CustomPhoto'
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
        
        <CustomPhoto />

        {/* <div className='me'>
            <img src={ME} viewBox="113 128 972 600"
    preserveAspectRatio="xMidYMid meet" alt="me" />
        </div> */}

        {/* DON'T FORGET TO INLINE STYLE THE SIZE OF THE PHOTO */}


        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header