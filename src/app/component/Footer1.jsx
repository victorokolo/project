import React from 'react'
import Link from 'next/link'

function Footer1() {
  return (
    <div className='pl-20  pr-20 bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2
     sm:pt-10 md:pt-10 pb-20 pt-10 '>
    <div className='  text-white '>
    <h1> Nigeria</h1>
    </div>
      <ul className='text-white flex justify-between item-center h-full pt-3 
        '>
      <div>
      <Link href= '/Home'>
      <li className='pr-3   text-sm'>
      Facebook</li>
    </Link>
      </div>
      <div>
      <Link href= '/Home'>
      <li className='pr-3 text-sm'>
      Twitter</li>
    </Link>
      </div>
  
      <div>
      <Link href= '/Home'>
      <li className='    text-sm'>
      Instagram</li>
    </Link>
      </div>
  
      <div>
      <Link href= '/Home'>
      <li className=' text-sm'>
      Linkedin</li>
    </Link>
      </div> 
    </ul>
    <div className='  text-white pt-20   '>
    <h1> @2023 coudP2P. All right reserved </h1>
    </div>
      <ul className='text-white flex justify-between item-center h-full pt-20 
        '>
      <div>
      <Link href= '/Home'>
      <li className='    text-sm'>
      Privacy Policy</li>
    </Link>
      </div>
      <div>
      <Link href= '/Home'>
      <li className='    text-sm'>
      Term of Use</li>
    </Link>
      </div>
  
      <div>
      <Link href= '/Home'>
      <li className='    text-sm'>
      Cookies Policy</li>
    </Link>
      </div>
    </ul>
    </div>
  )
}

export default Footer1
