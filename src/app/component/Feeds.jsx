import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Feeds() {
  return (


      <div className='  pt-10 sm:grid grid-cols-1 md:grid-cols-3 lg: grid-cols-3  m-10'>
      <div className='pb-5 '>
      <Link href='/'>
      <Image 
      src='/image/newsfeeds.png'
      width={350}
      height={250}
     alt="feed1"
     priority
     />
     <p className='pt-10 text-sm'>MARKET ANALYSIS</p>
     <h1 className='pt-5 font-bold text-2xl'>Crypto Market in 2022</h1>
     <p className='pt-5 text-sm'>Mar 8, 2023. 8 Min Read</p>
      </Link>
      </div>
      <div className='pb-10 pl-3 '>
      <Link href='/'>
      <Image 
      src='/image/side.png'
      width={350}
      height={250}
     alt="feed2"
     priority
     />
     <p className='pt-10 text-sm '>MARKET ANALYSIS</p>
     <h1 className='pt-5 font-bold text-2xl'>Crypto Market in 2022</h1>
     <p className='pt-5 text-sm'>Mar 8, 2023. 8 Min Read</p>
      </Link>
      </div>
      <div className='pl-3'>
      <Link href='/'>
        <Image 
      src='/image/pop1.png'
      width={350}
      height={250}
     alt="feed"
     priority
     />
     <p className='pt-10 text-sm'>MARKET ANALYSIS</p>
     <h1 className='pt-5 font-bold text-2xl'>Crypto Market in 2022</h1>
     <p className='pt-5 text-sm'>Mar 8, 2023. 8 Min Read</p>
      </Link>
      
      </div>
    </div>

  )
}

export default Feeds
