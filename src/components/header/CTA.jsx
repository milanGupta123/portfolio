import React from 'react'
import myresume from '../../assets/myresume.pdf'
function CTA() {
  return (
    <div className='cta'>
        <a href={myresume} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA 