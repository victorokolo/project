import React from 'react'
import  Link  from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <div className ='bg-sky-600 text-white p-4 pb-20 pt-20 text-center'  >
    <div className='   pb-10 text-xs  flex justify-center  '>
     <button className=' px-5 py-3 rounded-full bg-white text-black text-base font-normal '>New</button>
     <p className='pl-5 pt-3 text-xs text-center md:text-base lg:text-base  font-normal'>
     Announcing our new brand identity</p>
     <Link href={'/'}>
     <Image src ='/pic/arrowwhite.svg'
     className='pl-2 md:pt-4 pt-3'
     width={25}
     height={25}
     alt="arrow" 
     />
     </Link>
   
    </div>
     <div className=' text-2xl lg:text-5xl md:text-xl pb-10 font-extrabold'>
      <h1 className='pb-2'>Cryto & Asset Management</h1>
      <h1>with Next-Generation Solutions</h1>
     </div>
     <div className=''>  
         <p className='pb-2 w-11/12 justify-center pl-10 text-sm md:text-base lg:text-base'>our user-friendly interface and advanced security features makes cloudp2p the go to</p>
      <p className=' w-11/12 justify-center pl-10 text-sm md:text-base lg:text-base'>App for anyone serious about managing their crytocurrency portfolio</p>
      </div>
      <div className='pt-10 flex justify-center'>
        <button className='px-5 py-3 rounded-full text-base bg-white text-black'>
          <h1>Download moble app</h1>
        </button> 
        <Link href='/'>
        <h3 className='pt-3 pl-5 text-base' >Give Feedback</h3>
        </Link> 
        </div>    
    </div>
  )
}

export default Header
