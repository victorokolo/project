import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Stories() {
  return (
    <div className='flex justify-between pt-20 text-center  '>
    <Link href='/'>
    <h1 className='pl-5 text-sm font-extrabold  md:text-2xl'>Latest Stories</h1>
    </Link>
    <div>
    <div className='flex '>
    <Link href='/'>
    <h3 className=' pr-5 md:pr-10 text-sm  md:text-2xl lg:text-2xl'>VIEW ALL STORIES</h3> 
    </Link>
    <div className='pr-20'>
    <Link href={'/'}>
    <Image className='' src ='/pic/frame.svg'
    width={25}
    height={25}
    alt="arrow" 
    />
    </Link> 
    </div>
    </div>  
 
    </div>
    </div>
  )
}

export default Stories

