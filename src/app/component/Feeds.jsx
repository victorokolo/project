import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Feeds() {
  return (


      <div className='  pt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  m-10'>
      <div className='pb-5 '>
      <Link href='/'>
      <Image 
      src='/pic/Group 237853 (1).svg'
      width={350}
      height={250}
     alt="feed1"
     priority
     />
     <p className='pt-10 font-medium text-xs'>MARKET ANALYSIS</p>
     <h1 className='pt-5 font-medium text-base '>Crypto Market in 2022</h1>
     <p className='pt-5 text-xs font-normal '>Mar 8, 2023. 8 Min Read</p>
      </Link>
      </div>
      <div className='pb-10 pl-3 '>
      <Link href='/'>
      <Image 
      src='/pic/poppp.svg'
      width={350}
      height={250}
     alt="feed2"
     priority
     />
     <p className='pt-10  font-medium text-xs '>MARKET ANALYSIS</p>
     <h1 className='pt-5 font-medium text-base'>Crypto Market in 2022</h1>
     <p className='pt-5 text-xs font-normal'>Mar 8, 2023. 8 Min Read</p>
      </Link>
      </div>
      <div className='pl-3 '>
      <Link href='/'>
        <Image 
      src='pic\Group 237853.svg' 
      width={350}
      height={250}
     alt="feed"
     priority
     />
     <p className='pt-10 font-medium text-xs'>MARKET ANALYSIS</p>
     <h1 className='pt-5 font-medium text-base '>Crypto Market in 2022</h1>
     <p className='pt-5 text-xs font-normal'>Mar 8, 2023. 8 Min Read</p>
      </Link>
      
      </div>
    </div>

  )
}

export default Feeds
