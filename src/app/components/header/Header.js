
import Link from 'next/link'
import React from 'react'
import Navbar from '../navbar/Navbar'
import './header.css'

function Header() {
  return (
    <div>
        <div className="header-container">
            <div className="navbar-brand">
              
                <Link href='/'>
                <img src="./sandeepflix.png" alt=""  />

                </Link>
            </div>
            <div>
          <Navbar/>
            </div>
        </div>
    </div>
  )
}

export default Header