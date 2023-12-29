import React from 'react'
import Link from 'next/link'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='  z-0 w-full h-20  bg-sky-600'>   
     <div className='flex justify-between item-center h-full w-full px-20 py-8 2xl:px16'>
     <div>
      <ul className='hidden sm:flex text-white'>
      <Link href= '/Home'>
        <li className='ml-10   hover:border-b text-sm'>
        Product</li>
      </Link>
      <Link href= '/Home'>
          <li className='ml-10   hover:border-b text-sm'>
         Features</li>
      </Link>
       <Link href= '/Home'>
             <li className='ml-10   hover:border-b text-sm'>
             Support</li>
        </Link>
      <Link href= '/Home'>
          <li className='ml-10   hover:border-b text-sm'>
          About us</li>
      </Link>
        <Link href= '/Home'>
          <li className='ml-8  hover:border-b text-sm'>
        Blog</li>
      </Link>
      </ul>
     </div>
     <div className=''>
     <ul className='hidden sm:flex text-white'>
     <Link href= '/Home'>
       <li className='ml-10   hover:border-b text-sm'>
       Sign in</li>
     </Link>
     <div className='ml-10   hover:border-b text-sm' >
     <button className ='px-6 py-3 rounded-full bg-white text-black pb-2 mb-10 '>Get started</button>
     </div>
  
     </ul>
     </div>
     </div>
    </nav>
  )
}

export default Navbar
