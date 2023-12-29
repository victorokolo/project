import React from 'react'
import Image from 'next/image'

function Information() {
  return (
    <div  className='text-black item-center mt-20 grid grid-cols-3'>
      <div className='pl-10 pt-36 text-base justify-stretch'>
        <h1 className='pb-10 font-extrabold xl'>Secure Transfer</h1>
        <p> A secure transfer system that ensures your<br/> transcation are safe & your personnal 
        information <br/>remains private </p>
        <div className='flex justify-normal '>
        <h3> Get Started</h3> 
        <p className='pl-5'> Sign In</p>
        </div>
       
      </div>
      <div className='item-center pl-10'>
        <Image 
        src="/image/pic1.png"
          width={300}
         height={250}
        alt="pic1"
        priority
        />
      </div>
      <div className='pr-10 pl-10 pt-15 text-base justify-stretch'>
        <h1 className='pb-10 font-extrabold xl'>Send & Recieve Money</h1>
        <p>We developed an esay and efficient platform that allows you to recieve money quckly and
         securely without any hassle</p>
        <p className='pt-2'> learn more</p>
        <div className='text-left pt-10'>
            <h1 className='pb-5 font-extrabold xl'>Swap crypto</h1>
            <p> A secure and efficient platform that allow yo to sawp your cryptocurrency quckly and easily without any hassle </p>
        </div>
        </div>
    </div>
  )
}

export default Information
