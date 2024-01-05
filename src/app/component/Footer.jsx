import React from 'react'
import Link from 'next/link'


function Footer() {
  return (
    <div className=' text-xs justify-stretch font-normal pt-10 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 bg-black text-white 
    text-center'>

    <div className='pb-20'>
 <Link href='/'>
 <ul>
      
 <li className='text-lg font-medium'>Features</li>
<li className='pt-5'>Card Payment</li>
<li className='pt-5'>Crypto Transfer</li>
<li className='pt-5'>p2p Trading</li>
<li className='pt-5'>Refer & Earn</li>
</ul>
</Link>
      </div>

 <div className='pb-10'>
 <Link href='/'>
 <ul>
 <li className='text-lg font-medium'>Contact</li>
 <li className='pt-5'>Company</li>
 <li className='pt-5'>About us</li> 
 <li className='pt-5'>Blog</li>
 <li className='pt-5'>Careers</li>
 </ul>
 </Link>
 
 </div>


 <div className='pb-10'>

 <Link href='/'>
 <ul>
 <li className='text-lg font-medium'>Support</li>
 <li className='pt-5'>Give us Feedback</li>
 <li className='pt-5'>Help out</li>
 <li className='pt-5'>Live Chat</li>
 </ul>
 </Link> 
 </div>



 
 <div className='pb-10 text-center'>
 <Link href='/'>
 <ul>
  <li className='text-lg font-medium'>Resource </li>
<li className='pt-5'>Developer</li>
<li className='pt-5'>Documentation</li>
<li className='pt-5'>Api Reference</li>
<li className='pt-5'>SDKs</li>
</ul>
 </Link>
 
 </div>


 <div className='pb-10 '>
 <Link href='/'>
 <ul className=''>
 <li className='text-lg font-medium'>Contact</li>
 <li className='pt-5'>Support@cloudp2p.io</li>
 <li className='pt-5 justify-stretch'>1234 eln street san<br/> Franciso, CA 94109<br/> united state</li>
 </ul>
 </Link>
 
    </div>
    </div>
  )
}

export default Footer
