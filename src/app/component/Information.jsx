import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Information() {
  return (
    <div  className='   text-justify text-black item-center mt-20 sm:grid grid-cols-1 md:grid-cols-3 lg: grid-cols-2'>
      <div className='pl-10 pt-36 text-base justify-stretch '>
        <h1 className='pb-10 font-extrabold xl'>Secure Transfer</h1>
        <p> A secure transfer system that ensures your<br/> transcation are safe & your personnal 
        information <br/>remains private </p>
        <div className='flex justify-normal pt-5 '>
        <Link href='/'>
        <button className=' px-5 py-3 rounded-full  text-black text-white bg-sky-600'> Get Started</button> 
        </Link>
        <Link href='/'>
        <p className='pl-5 text-black pt-3'> Sign In</p>
        </Link>
        
        </div>
       
      </div>
      <div className='item-center pl-10 pt-10'>
        <Image 
        src="/image/phonix.png"
          width={300}
         height={611}
         top={94}
         left={970}

        alt="pic1"
        priority
        />
      </div>
      <div className='pr-10 pl-10 pt-5 text-base justify-stretch'>
        <h1 className='pb-10 font-extrabold xl'>Send & Recieve Money</h1>
        
        <p>We developed an esay and efficient platform that allows you to recieve money quckly and
         securely without any hassle</p>
         <div className='flex'>
        <Link href='/'>
        <p className='pt-2 text-blue-600'> Learn More</p>
        </Link>
         
         <Link href='/' >
         <Image 
         src="/image/path.png"
           width={50}
          height={50}
          top={94}
          left={970}
 
         alt="pic1"
         priority
         />
         </Link>      
         </div>
        
        
        <div className='text-left pt-10'>
            <h1 className='pb-5 font-extrabold xl'>Swap crypto</h1>
            <p> A secure and efficient platform that allow yo to sawp your cryptocurrency quckly and easily without any hassle </p>
        </div>
        <div className='flex'>
        <Link href='/'>
        <p className='pt-2 text-blue-600'> Learn More</p>
        </Link>
        
        <Link href='/' >
        <Image 
        src="/image/path.png"
          width={50}
         height={50}
         top={94}
         left={970}

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
