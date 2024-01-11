import Link from 'next/link'
import React from 'react'
import './herosection.css'
import Image from 'next/image'

function Herosection({title,imageUrl}) {
  return (
    <div className='herosection-container'>
     
     <div className="hero-content">
        <h1>{title}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde autem quos veniam quis totam voluptates ut consectetur, dolorum quisquam repudiandae minus a! Quo error dignissimos ea. Quidem odit provident reiciendis!</p>
        <Link href='/movie'>
        <button>Explore Movie</button>
        </Link>
     </div> 
     <div className='hero-image'>
     <Image src={imageUrl} alt="" height={260}width={400} />
     </div>

    </div>
  )
}

export default Herosection