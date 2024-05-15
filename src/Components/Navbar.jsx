import React from 'react'
import "./Navber.css"

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar