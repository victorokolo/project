import React from 'react'
import Link from 'next/link'

function Footer1() {
  return (
    <div className='bg-black flex justify-between'>
    <div className='pt-10   text-white '>
    <h1> Nigeria</h1>
    </div>
      <ul className='text-white flex justify-between item-center h-full
        px-10 py-5 2xl:px16'>
      <div>
      <Link href= '/Home'>
      <li className='    text-sm'>
      Facebook</li>
    </Link>
      </div>
      <div>
      <Link href= '/Home'>
      <li className='    text-sm'>
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
    </div>
  )
}

export default Footer1
