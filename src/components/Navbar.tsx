import React from 'react'
import Link from 'next/link';
import '../styles/navbar.css'; 

const Navbar = () => {
  return (
    <div className="container">
      <div className="flex-container">
        <div className="title"><span>IT</span> Skills</div>
        <ul className="menu">
          <li className="menu-link">
          <Link href="./aboutme">About me</Link>
          </li>
        </ul>        
      </div>
    </div>

  )
}

export default Navbar