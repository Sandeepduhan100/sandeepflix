import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
const Moviecard = (title) => {
  const { id,synopsis } = title.jawSummary
  return (
    <div className="movie-card">
      
      <Image src={title.jawSummary.backgroundImage.url} width={300} height={150} alt='loading'/> 
      <h2>{title.jawSummary.title.substring(0,18)}</h2>
      <p>{`${synopsis.substring(0,66)} ...`}</p>
        
        <Link href ={`./movie/${id}`}>
        <button>Read More </button>
        </Link>
          
    
     
    </div>
  );
};

export default Moviecard;
