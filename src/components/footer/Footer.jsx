import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Milan Kumar</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/milan-kumar001" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/milanGupta123" targrt="_blank" rel="noreferrer"><BsGithub/></a>
      </div>

      <div className="footer_copyright">
          <small>&copy; Milan Kumar. All right reserved.</small>
      </div>
    </footer>
    )
}

export default Footer