import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function End() {
  return (
    <div>
    <div className ='bg-black text-white p-24  text-center mt-20 '  >
    <div className='flex justify-center  auto-cols-max pb-10 text-xs'>
     <button className='px-5 py-3 rounded-full bg-white text-black '>New</button>
     <p className='pl-5 pt-3 pr-3'>Announcing our new brand identity</p>

     <Image src ='/image/path.png'
     width={25}
     height={25}
     alt="arrow" 
     />
     
    </div>
    <div className='text-6xl pb-10 font-extrabold'>
     <h1 className='pb-2'>Ready to Get Started?</h1>
    </div>
    <div className='text-xs'>  
        <p className='pb-2 '>Take the first step toward your goal and get started today. Sign up now and join</p>
     <p >thousand of satified customer who have already achieved sucess with our solution</p>
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
