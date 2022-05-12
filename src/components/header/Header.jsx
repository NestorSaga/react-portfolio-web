import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ME.png'
import HeaderSocials from './HeaderSocials'

import { Typewriter} from 'react-simple-typewriter'

function Header() {



  return (
    <header>
        <div className="container header__container">
            
            <h1><Typewriter 
            words = {["Néstor Sánchez"]}
            typeSpeed={90}
            delaySpeed={500}
            loop={1}/></h1>
            <h5 className="text-light"><Typewriter 
            words = {["Software Engineer & Aspiring Technical Designer"]}
            typeSpeed={40}
            delaySpeed={200}
            loop={1}/>
            </h5>
            <CTA />
            <HeaderSocials />
            
        </div>
    </header>
  )
}

export default Header