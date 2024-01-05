import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Information() {
  return (
    <div  className='text-black  mt-20 sm:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2'>
      <div className='pl-10 pt-20 '>
        <h1 className='pb-10 text-xl font-bold'>Secure Transfer</h1>
        <p className='text-lg font-normal text-justify justify-stretch pr-10'> A secure transfer system that ensures your transcation are safe & your personnal 
        information remains private </p>
        <div className='flex justify-normal pt-5 '>
        <Link href='/'>
        <button className=' px-5 py-3 rounded-full  text-white bg-sky-600'> Get Started</button> 
        </Link>
        <Link href='/'>
        <p className='pl-5 text-blue-600 pt-3'> Sign In</p>
        </Link>
        
        </div>
       
      </div>
      <div className='item-center pl-10 pt-10'>
        <Image 
        src="/pic/bigphone.svg"
          width={300}
         height={611}
         top={94}
         left={970}

        alt="pic1"
        priority
        />
      </div>
      <div className='pr-10 pl-10 pt-5 text-base justify-stretch'>
        <h1 className='pb-10 text-xl font-bold'>Send & Recieve Money</h1>
        
        <p className='text-lg font-normal'>We developed an esay and efficient platform that allows you to
         recieve money quickly and
         securely without any hassle</p>
         <div className='flex'>
        <Link href='/'>
        <p className='pt-2 text-blue-600'> Learn More</p>
        </Link>
         
         <Link href='/' >
         <Image className='pt-3 pl-2'
         src="/pic/arrowright.svg"
           width={20}
          height={20}
 
         alt="pic1"
         priority
         />
         </Link>      
         </div>
        
        
        <div className='text-left pt-10'>
            <h1 className='pb-5 text-xl font-bold'>Swap crypto</h1>
            <p className='text-lg font-normal'> A secure and efficient platform that allow yo to sawp your cryptocurrency quckly and easily without any hassle </p>
        </div>
        <div className='flex'>
        <Link href='/'>
        <p className='pt-2 text-blue-600'> Learn More</p>
        </Link>
        
        <Link href='/' >
        <Image className='pt-3 pl-2'
        src="/pic/arrowright.svg"
          width={20}
         height={20}
       

        alt="pic1"
        priority
        />
        </Link>      
        </div>
        </div>
    </div>
  )
}

export default Information
