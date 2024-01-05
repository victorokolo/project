import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function End() {
  return (
    <div>
    <div className ='bg-black text-white p-4 pb-20 pt-20 text-center mt-20 '  >
    <div className='flex justify-center  auto-cols-max pb-10 text-xs'>
     <button className='px-5 py-3 rounded-full bg-white text-black '>New</button>
     <p className='pl-5 pt-3 pr-3 text-xs text-center md:text-base lg:text-base  font-normal'>Announcing our new brand identity</p>

     <Image src ='/pic/arrowwhite.svg'
     className=' md:pt-3'
     width={25}
     height={25}
     alt="arrow" 
     />
     
    </div>
    <div className='text-2xl lg:text-5xl md:text-xl pb-10 font-extrabold'>
     <h1 className='pb-2'>Ready to Get Started?</h1>
    </div>
    <div className='text-xs'>  
        <p className=' w-11/12 justify-center pb-2 pl-10 text-xs text-center md:text-base lg:text-base  font-normal'>Take the first step toward your goal and get started today. Sign up now and join</p>
     <p className=' w-11/12 justify-center pl-10 text-xs text-center md:text-base lg:text-base  font-normal'>thousand of satified customer who have already achieved sucess with our solution</p>
     </div>
     <div className='pt-10 flex justify-center'>
       <button className='px-5 py-3 rounded-full bg-sky-600 text-white '>
         <h1>Get started</h1>
       </button> 
       <Link href='/'>
       <h3 className='pl-10 pt-3'>Contact Support</h3>
       </Link>
        
         </div>
   </div>
    </div>
  )
}

export default End
