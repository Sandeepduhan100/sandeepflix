
import Link from 'next/link'
import React from 'react'
import Navbar from '../navbar/Navbar'
import './header.css'
import Image from 'next/image'

function Header() {
  return (
    <div>
        <div className="header-container">
            <div className="navbar-brand">
              
                <Link href='/'>
                
                <Image src="/sandeepflix.png" alt="img" width={150} height={100} />

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