import React from 'react'
import './about.css'
// import YOUNGBOY from '../../assets/image0.jpeg'
import COLO from '../../assets/image2.jpeg'
import {GrUserWorker} from 'react-icons/gr'
import {BsFolderCheck} from 'react-icons/bs'
import {BsPeople} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5 id="gtn">Get To Know More</h5>
      <h2 id="gtn">About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img width="500" src={COLO} alt="About Me" />
          </div>

        </div>
        <div className='about__content'>

          <div className='about__cards'>
            <article className='about__card'>
              <GrUserWorker className='about__icon'/>
              <h5>Experience</h5>
              <small id='lil_one'>2+ Years</small>
            </article>
            <article className='about__card'>
              <BsPeople className='about__icon'/>
              <h5>Clients</h5>
              <small id='lil_one'>1 Current Client</small>
            </article>
            <article className='about__card'>
              <BsFolderCheck className='about__icon'/>
              <h5>Projects</h5>
              <small id='lil_one'>5 Projects and Counting</small>
            </article>
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis purus, sollicitudin eget eleifend a, vestibulum vel diam. Aliquam urna libero, iaculis id tellus et, faucibus accumsan enim. Maecenas fermentum varius accumsan. Quisque vestibulum dolor molestie leo semper, et cursus nibh dapibus. Duis enim arcu, feugiat in lorem in, pulvinar congue urna. Aliquam ac ligula nec urna commodo elementum at vel quam. Aliquam sed mi sit amet ipsum venenatis sodales euismod quis purus. Proin et est congue, ultricies quam nec, fermentum tellus.
          </p>

          <a href="#contact" className='btn btn-primary'>Lets Chat</a>
        </div>


      </div>
    </section>
  )
}

export default About