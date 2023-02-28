import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookContent} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setactiveNav]= useState('#home')
  return (
    <nav>
        <a href="#"  onClick={() => setactiveNav('#')} className={activeNav === '#' ? 'active':""}><AiOutlineHome/></a>
        <a href="#about" onClick={() => setactiveNav('#about')} className=
        {'about' ? 'active': ""}><AiOutlineUser/></a>

        <a href="#experience" onClick={() => setactiveNav('#experience')} className=
        {'experience' ? 'active': ""}><BiBookContent/></a>

        <a href="#services" onClick={() => setactiveNav('#services')} className=
        {'services' ? 'active': ""}><RiServiceLine/></a>

        <a href="#contact" onClick={() => setactiveNav('#contact')} className=
        {'contact' ? 'active': ""}><BiMessageSquareDetail/></a>
     </nav>
  )
}

export default Nav