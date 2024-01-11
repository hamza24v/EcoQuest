import React from 'react'
import avatar from "../assets/avatar.png";

const NavBar = () => {
  return (
    <div className='navbar'>
        <h1 className='header'>OceanQuest</h1>
            <img className= 'avatar' src={avatar} />
    </div>
  )
}

export default NavBar