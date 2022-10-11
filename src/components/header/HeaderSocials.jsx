import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {ImGithub} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"> <SiLinkedin /></a>
        <a href="https://github.com" target="_blank"><ImGithub /></a>
    </div>
  )
}

export default HeaderSocials