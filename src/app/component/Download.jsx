import React from 'react'
import Image from 'next/image'

function Download() {
  return (
    <div className='grid grid-cols-2 justify-self-center mt-20 px-10 rounded-r-3xl rounded-t-3xl bg-slate-100 mx-20 my-20' >
      <div className='pl-7 pt-8'>
      <button className='pt-10'> New</button>
      <p>Cross Border Payment</p>
      <h1 className='text-4xl pt-10 font-extrabold'>Safe Secure & Private
      </h1>
      <h1 className='pt-3 font-extrabold text-4xl'>International Transcation</h1>
      </div>
      <div>
      <Image 
      src="/image/phone.png"
        width={1000}
       height={1000}
      alt="phone"
      priority
      />
      </div>
    </div>
  )
}

export default Download
