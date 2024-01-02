import React from 'react'
import  Link  from 'next/link'

function Header() {
  return (
    <div className ='bg-sky-600 text-white p-24 text-center'  >
    <div className='   pb-10 text-xs  flex justify-center  '>
     <button className=' px-5 py-3 rounded-full bg-white text-black '>New</button>
     <p className='pl-10 pt-3'>Announcing our new brand identity</p>
    </div>
     <div className='text-4xl pb-10 font-extrabold'>
      <h1 className='pb-2'>Cryto & Asset Management</h1>
      <h1>with Next-Generation Solutions</h1>
     </div>
     <div className='text-xs'>  
         <p className='pb-2 '>our user-friendly interface and advanced security features makes cloudp2p the go to</p>
      <p >App for anyone serious about managing their crytocurrency portfolio</p>
      </div>
      <div className='pt-10 flex justify-center'>
        <button className='px-5 py-3 rounded-full bg-white text-black'>
          <h1>Download moble app</h1>
        </button> 
        <Link href='/'>
        <h3 className='pt-3 pl-5' >Give Feedback</h3>
        </Link> 
        </div>    
    </div>
  )
}

export default Header
