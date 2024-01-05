import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Download() {
  return (
    <div className='rounded-r-2xl mx-0 md:ml-10 md:mr-10 mt-20 justify-self-center pt-20 px-10 bg-violet-50
     grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ' >
     <div className=' pt-8 '>
     <div className='flex'>
     <button className=' px-5 py-3 rounded-full bg-sky-600 text-white pb-3' > New</button>
   <Link href={'/'}>
   <p className='pt-3 pl-3 text-blue-600 text-lg font-normal'>Cross Border Payment</p>
   </Link>
    <Link href={'/'}>
    <Image  className="pl-3 pt-4"
    src="/pic/arrowright.svg"
      width={30}
     height={30}
    alt="phone"
    priority
    /> 
    </Link>
   </div>
     
     <h1 className='text-xl lg:text-4xl md:text-xl font-bold  pt-10'>Safe Secure & Private
     </h1>
     <h1 className='pt-3  text-xl lg:text-4xl md:text-xl font-bold  pb-10'>International Transaction</h1>
     <Link href='/'>
     <Image  className="pb-10"
     src="/pic/BTN.svg"
       width={350}
      height={715}
     alt="phone"
     priority
     />
     </Link>
 
     </div>
     <div>
     <Image  className=" justify-end"
     src="/pic/smallphone.svg"
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
