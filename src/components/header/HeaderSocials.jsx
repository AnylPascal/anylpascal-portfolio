import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {ImGithub} from 'react-icons/im'
import {SiMedium} from 'react-icons/si'
import {ImStackoverflow} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"> <SiLinkedin /></a>
        <a href="https://github.com" target="_blank"><ImGithub /></a>
        <a href="https://medium.com/@AnylPascal" target="_blank"> <SiMedium /></a>
        <a href="https://stackoverflow.com/users/13615914/anyl-pascal.com" target="_blank"><ImStackoverflow /></a>  
    </div>
  )
}

export default HeaderSocials