import React from 'react'
import './Footer.css'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Milan Kumar</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FiFacebook></FiFacebook></a>
        <a href="https://instagram.com"> <FiInstagram></FiInstagram></a>
      </div>

      <div className="footer_copyright">
          <small>&copy; Milan Kumar. All right reserved.</small>
      </div>
    </footer>
    )
}

export default Footer