import Image from 'next/image';
import React from 'react'

 async function page({params}) {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}lang=en`
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5b5c6a664dmsh783b5eacf5e6d28p169f86jsn3e2a0bbfe80e',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
  
  const res = await fetch(url,options);
  const data =  await res.json();

  const main_data = data[0].details;
 
  
  console.log(id);
  return (
    <div className='slug-container' >
       <div className="heading1">
       <h2>Netflix {main_data.type}</h2>
       </div>
       <div className="card-section">
        <div>
          <Image src={main_data.backgroundImage.url} width={460} height={300} alt='IMAGE' />
        </div>
        <div>
          <h1>{main_data.title}</h1>
          <p>{main_data.synopsis}</p>
        </div>
       </div>


            
       
    </div>
  )
}

export default page