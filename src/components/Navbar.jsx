import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='nav'>
      <img className='nav--icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt=""/> {/* error with use local image in images folder */}
      <h3 className='nav--logo_text'>ReactFacts</h3>
      <h4 className='nav--title'>React Course - Project 1</h4>
    </nav>
  )
}

