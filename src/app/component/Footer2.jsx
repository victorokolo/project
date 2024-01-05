import React from 'react'
import Link from 'next/link'

function footer2() {
  return (
    <div className='bg-black '>
       
     <div className='pb-10 md:flex justify-between md:pl-20 md:pr-20  pl-5'>
     <div className='  text-white  justify-start   '>
     <h1 className='text-xs md:pt-5'> @2023 coudP2P. All right reserved </h1>
     </div>
       <ul className='text-white   flex justify-between  h-full pt-5 pr-5 md:pt-5     '>
       <div>
       <Link href= '/Home'>
       <li className='   pr-3 md:pr-10 lg:pr-10 text-xs  '>
       Privacy Policy</li>
     </Link>
       </div>
       <div>
       <Link href= '/Home'>
       <li className='  pr-3 md:pr-10 lg:pr-10 text-xs   '>
       Term of Use</li>
     </Link>
       </div>
   
       <div>
       <Link href= '/Home'>
       <li className=' pr-3 md:pr-10 lg:pr-10  text-xs   '>
       Cookies Policy</li>
     </Link>
       </div>
     </ul>
     </div>
    </div>
  )
}

export default footer2
