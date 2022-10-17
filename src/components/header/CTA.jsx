import React from 'react';
import CV from '../../assets/newresume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> My Resume</a>
        {/* will on on hover effect here saying download  */}
        <a href="#contact" className='btn btn-primary'>Get In Contact</a>
    </div>
  )
}

export default CTA
