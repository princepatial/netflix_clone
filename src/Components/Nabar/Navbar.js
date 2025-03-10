import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../Firebase'


function Navbar() {
  return (
    <div className='Navbar'>
      <div className='navbar-left'>
        <img src={logo}alt="mainlogo"/>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={search} alt="icon" className='icons'/>
        <p>Children</p>
        <img src={bell} alt="icon" className='icons'/>
        <div className='navbar-profile'>
        <img src={profile_img} alt="icon" className='profile'/>
        <img src={caret_icon} alt="icon"/>

        <div className='dropdown'>
          <p onClick={() => {logout()}}>Sign out of Netflix</p>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
