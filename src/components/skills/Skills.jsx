import React from 'react'
import './skills.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

import {SiCsharp} from 'react-icons/si'
import {DiJavascript} from 'react-icons/di'
import {SiJava} from 'react-icons/si'
import {DiAndroid} from 'react-icons/di'
import {SiPython} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiReact} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiDocker} from 'react-icons/si'
import {DiMysql} from 'react-icons/di'

import {SiUnrealengine} from 'react-icons/si'
import {SiUnity} from 'react-icons/si'
import {SiVisualstudio} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'
import {SiAdobephotoshop} from 'react-icons/si'
import {FaJira} from 'react-icons/fa'
import {GiCube} from 'react-icons/gi'

const Skills = ()  => {
  return (
    <section id='skills'>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className='skills__skills'>
          <h2>Skills</h2>
          <div className="skills__content">
            <div className='subskills__subskills'>  
              <h3>Languages & Frameworks</h3>
            <div className='subskills__content'>              
            <article className="skills__details">
              <SiJava className ='skills__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Advanced</small>
              </div>           
            </article>

            <article className="skills__details">
              <SiCsharp className ='skills__details-icon' />
              <div>
              <h4>C#</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            
            <article className="skills__details">
              <DiJavascript className ='skills__details-icon' />
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <DiAndroid className ='skills__details-icon' />
              <div>
              <h4>Android</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="skills__details">
              <SiPython className ='skills__details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="skills__details">
              <FaNodeJs className ='skills__details-icon' />
             <div>
              <h4>Node JS</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>

            <article className="skills__details">
              <SiReact className ='skills__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="skills__details">
              <SiMongodb className ='skills__details-icon' />
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <DiMysql className ='skills__details-icon' />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="skills__details">
              <SiDocker className ='skills__details-icon' />
              <div>
              <h4>Docker</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            </div>
            </div>

            <div className='skills__separator'></div>

            <div className='subskills__subskills'> 
              <h3>Roles</h3>
            <div className='subskills__content'>
              
              <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>Technical Design</h4>
              <small className='text-light-2'>Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>Systems Programming</h4>
              <small className='text-light-2'>Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>Game Design</h4>
              <small className='text-light-2'>Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>Software Engineer</h4>
              <small className='text-light-2'>Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>Fullstack Developer</h4>
              <small className='text-light-2'>Experienced</small>
              </div>
            </article>

            </div>
            </div>
          </div>
        </div>

        {/* END OF SKILLS */}

        <div className='skills__software'>
        <h2>Software</h2>
          <div className="software__content">
          <div className='subskills__software'>  
              <h3>algo</h3>
              <div className='subskills__content'> 
            <article className="skills__details">
              <SiUnity className ='skills__details-icon' />
              <div>
              <h4>Unity</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiUnrealengine className ='skills__details-icon' />
              <div>
              <h4>UnrealEngine</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="skills__details">
              <GiCube className ='skills__details-icon' />
              <div>
              <h4>3DS MAX</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <SiVisualstudio className ='skills__details-icon' />
              <div>
              <h4>Visual Studio</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>

            <article className="skills__details">
              <FaGithub className ='skills__details-icon' />
              <div>
              <h4>GIT</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>

            <article className="skills__details">
              <SiAdobephotoshop className ='skills__details-icon' />
              <div>
              <h4>Photoshop</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <FaJira className ='skills__details-icon' />
              <div>
              <h4>Jira</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills