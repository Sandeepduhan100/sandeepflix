'use client'
import Link from 'next/link'
import React from 'react'
import './navbar.css'
import { useState } from 'react'
import Image from 'next/image'

function Navbar() {
    const [open,setOpen]=useState(false)
  return (
    <div className='navbar-container'>
        <div className="navbar">
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <Link href='/' >Home</Link>
                   
                </li>
                <li className='navbar-item'>
                <Link href='/about' >About</Link>
                   
                </li>
                <li className='navbar-item'>
                    <Link href='/movie' >Movie</Link>
                   
                </li>
                <li className='navbar-item'>
                <Link href='/contact' >Contact</Link>
                   
                </li>
            </ul>
        </div>


        <Image className='menubutton' src="/menu.png" alt="" onClick={() => setOpen(prev => !prev)} width={30} height={30} />
            {
                open && 
                    <ul className='mobilelinks'>
                <li className='navbar-item'>
                    <Link href='/' >Home</Link>
                   
                </li>
                <li className='navbar-item'>
                <Link href='/about' >About</Link>
                   
                </li>
                <li className='navbar-item'>
                    <Link href='/movie' >Movie</Link>
                   
                </li>
                <li className='navbar-item'>
                <Link href='/contact' >Contact</Link>
                   
                </li>
            </ul>
                
            }

    </div>
  )
}

export default Navbar 
                 
                  