import React from 'react'
import './skills.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Skills = ()  => {
  return (
    <section id='skills'>
      <h5>What skills I have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className='skills__skills'>
          <h3>Skills</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>           
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>C#</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>Android</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
             <div>
              <h4>Node JS</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>Docker</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        {/* END OF SKILLS */}

        <div className='skills__software'>
        <h3>Software</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>Unity</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>Unreal Engine</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>3DS MAX</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>VS Code</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>GIT</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>Adobe Photoshop</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillCheckCircleFill className ='skills__details-icon' />
              <div>
              <h4>Sony Vegas</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills