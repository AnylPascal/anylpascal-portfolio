import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>My Skill Set</h5>
        <h2>My Experience</h2>

        <div className='container experience__container'>
          <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'> 
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>CSS/SASS</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>React Native</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>React Bootstrap</h4>
            <small className='text-light'>Experienced</small>
          </article>
          </div>
          </div>
          <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'> 
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Node.js</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>MySQL / NoSQL</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>MongoDB</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Django Framework</h4>
            <small className='text-light'>Experienced</small>
          </article>
          </div>

          </div>
          <div className='experience__backend'>
          <h3>Cybersecurity</h3>
          <div className='experience__content'> 
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Network Security / Cryptography</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Governance, Risk, & Compliance / Forensics</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Linux Administration & Hardening</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Windows Administration & Hardening</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Bash Scripting & Programming</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Cloud Security & Virtualization</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Penetration Testing</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>SIEMS</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          
          </div>

          </div>
        </div>

    </section>
  )
}

export default Experience