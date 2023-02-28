import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import{FaDribbbleSquare} from 'react-icons/fa'
function Headersocial() {
  return (
    <div className='header_socials'>
        <a href="https://linkdin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com" targrt="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://dribbble.com" target="_blank" rel="noreferrer"><FaDribbbleSquare/></a>
    </div>
  )
}

export default Headersocial