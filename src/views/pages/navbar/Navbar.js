import React from 'react';
import '../../../style/nav.css'

const Navbar = () => {
  return (
        <nav className='nav'>
            <h1>
                Logo
            </h1>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
  )
}

export default Navbar