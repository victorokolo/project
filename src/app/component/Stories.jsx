import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Stories() {
  return (
    <div className='flex justify-between  '>
    <Link href='/'>
    <h1 className='pl-10 text-2xl font-extrabold text-sm md:text-2xl'>Latest Stories</h1>
    </Link>
    <div className='flex '>
    <Link href='/'>
    <div>
    <h3 className='pr-20 text-2xl text-sm md:text-2xl'>VIEW ALL STORIES</h3>
    </div>
    
    <Image className='' src ='/image/path.png'
    width={25}
    height={25}
    alt="arrow" 
    />
    </Link>
      
    </div>



    
     
    </div>
  )
}

export default Stories

