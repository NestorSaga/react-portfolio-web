import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaItchIo} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nestorsaga/" target ="_blank"><BsLinkedin /></a>
        <a href="https://github.com/NestorSaga" target ="_blank"><FaGithub /></a>
        <a href="https://nestorsaga.itch.io" target ="_blank"><FaItchIo /></a>
    </div>
  )
}

export default HeaderSocials