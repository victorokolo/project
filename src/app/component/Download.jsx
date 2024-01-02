import React from 'react'
import Image from 'next/image'

function Download() {
  return (
    <div className='  justify-self-center pt-20 px-10
    rounded-r-3xl rounded-t-3xl bg-slate-200 mx-20 my-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ' >
     <div className='pl-7 pt-8'>
     <button className=' px-5 py-3 rounded-full bg-white text-black pb-3' > New</button>
     <p>Cross Border Payment</p>
     <h1 className='sm:text-xl pt-10 font-extrabold'>Safe Secure & Private
     </h1>
     <h1 className='pt-3   sm:text-xl font-extrabold  pb-10'>International Transaction</h1>
     <Image  className="pb-10"
     src="/image/BTN.png"
       width={350}
      height={715}
     alt="phone"
     priority
     />
     </div>
     <div>
     <Image  className="w-350 md:w-200 lg:w-350"
     src="/image/promax.png"
       width={350}
      height={715}
     alt="phone"
     priority
     />
     </div>

   </div>
    
  


  )
}

export default Download
