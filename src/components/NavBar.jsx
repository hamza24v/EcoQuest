import React from 'react'
import avatar from "../assets/avatar.png";
import './comp.css'
const NavBar = () => {
  return (
    <div className='navbar'>
        <h1 className='header'>EcoQuests</h1>
            <img className= 'avatar' src={avatar} />
    </div>
  )
}

export default NavBar