import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import React, { useState } from 'react'
import './navbar.scss'

const Navbar = () => {
    const [isScrolled, SetIsScrolled] = useState(false);

    window.onscroll = () => {
        SetIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className='container'>
        <div className='left'>
            <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt=''  
            />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className='right'>
            <Search className='icon'/>
            <span>KID</span>
            <Notifications className='icon'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt='' />
            <div className='profile'>
            <ArrowDropDown className='icon'/>
            <div className='options'>
                <span>setting</span>
                <span>Logout</span>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar
