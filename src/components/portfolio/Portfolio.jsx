import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
        <h2>Portfolio</h2>
      

      <div className=" container portfolio__container">
        <article className='portfolio__item'> 
        <div className='portfolio__item-item'></div>
        <h3>This is a portfolio item title</h3>
        <a href="https://github.com" className='btn' target='_blank'></a>
        <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        </div>

    </section>
  )
}

export default Portfolio