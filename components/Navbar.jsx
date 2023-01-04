import React from 'react';
import {NavLink} from 'react-router-dom';
import {AiOutlineHome, AiOutlineHeart} from 'react-icons/ai';



const Navbar = () => {
  return (
    <div className='navbar bg-black'>
      <div className="container">
      <NavLink
      to='/'
      >
        <h1 className='text-white'>
        Kitab
        <span className='bg-orange text-black'>Xana</span>
      </h1>
      </NavLink>

      <div>
      <NavLink 
      to='/'
      className='nav-link text-white'>
        <span>Home</span> 
        <AiOutlineHome className='nav-icon' size='1.3rem'/>
      </NavLink>

      <NavLink 
      to='/favorites'
      className='nav-link text-white'>
        <span>Favorites</span> 
        <AiOutlineHeart className='nav-icon' size='1.3rem'/>
      </NavLink>
      </div>
      </div>
    </div>
  )
}

export default Navbar
