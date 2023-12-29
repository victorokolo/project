import React from 'react'
import Image from 'next/image'

function Feeds() {
  return (
    <div >
      <div className='flex justify-between'>
        <h3 className='pl-20 font-extrabold text-2xl'>Latest Stories</h3>
        <h3 className='pr-20 text-1xl'>View all Stories</h3>
      </div>
      <div className='pt-10 grid grid-cols-3 justify-self-center'>
      <div className='pl-5'>
      <Image 
      src='/image/feed1.png'
      width={400}
      height={400}
     alt="feed1"
     priority
     />
     <p className='pt-10 text-sm'>MARKET ANALYSIS</p>
     <h1 className='pt-5 font-bold text-2xl'>Crypto Market in 2022</h1>
     <p className='pt-5 text-sm'>Mar 8, 2023. 8 Min Read</p>
      </div>
      <div>
      <Image 
      src='/image/feed3.png'
      width={400}
      height={400}
     alt="feed2"
     priority
     />
     <p className='pt-10 text-sm '>MARKET ANALYSIS</p>
     <h1 className='pt-5 font-bold text-2xl'>Crypto Market in 2022</h1>
     <p className='pt-5 text-sm'>Mar 8, 2023. 8 Min Read</p>
      </div>
      <div>
      <Image 
      src='/image/feed2.jpeg'
      width={350}
      height={350}
     alt="feed"
     priority
     />
     <p className='pt-10 text-sm'>MARKET ANALYSIS</p>
     <h1 className='pt-5 font-bold text-2xl'>Crypto Market in 2022</h1>
     <p className='pt-5 text-sm'>Mar 8, 2023. 8 Min Read</p>
      </div>
    </div>
      
    </div>
  )
}

export default Feeds
