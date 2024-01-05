import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer1() {
  return (
    <div className=' text-xs pl-5 md:pl-20  pr-3 md:pr-20 bg-black  f
     sm:pt-10 md:pt-10 pb-20 pt-10 '>
     <div className='flex justify-between'>
     <div className=' pt-5 text-white flex '>
     <Image href='/' 
     src='/pic/nig.svg'
     width={25}
     height={25}
     />
     <h1 className='pl-3'> Nigeria</h1>
     </div>
       <ul className='text-white flex justify-between  h-full pt-5 pl-10
         '>
       <div>
       <Link href= '/Home'>
       <li className='pr-3 md:pr-10 lg:pr-10    '>
       Facebook</li>
     </Link>
       </div>
       <div>
       <Link href= '/Home'>
       <li className='pr-3 md:pr-10 lg:pr-10 '>
       Twitter</li>
     </Link>
       </div>
   
       <div>
       <Link href= '/Home'>
       <li className=' pr-3  md:pr-10 lg:pr-10  '>
       Instagram</li>
     </Link>
       </div>
   
       <div>
       <Link href= '/Home'>
       <li className=' pr-3 md:pr-10 lg:pr-10'>
       Linkedin</li>
     </Link>
       </div> 
     </ul>
     </div>
  
  
    </div>
  )
}

export default Footer1
