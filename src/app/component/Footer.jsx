import React from 'react'
import Link from 'next/link'


function Footer() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-black text-white  text-center'>
 <div className='pb-20'>
 <Link href='/'>
 <ul>
      
 <li>Features</li>
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
 <li>Contact</li>
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
 <li >Support</li>
 <li className='pt-5'>Give us Feedback</li>
 <li className='pt-5'>Help out</li>
 <li className='pt-5'>Live Chat</li>
 </ul>
 </Link> 
 </div>


 <div className='pb-10'>
 <Link href='/'>
 <ul>
 <li>Resource</li>
  <li className='pt-5'>Resource </li>
<li className='pt-5'>Developer</li>
<li className='pt-5'>Documentation</li>
<li className='pt-5'>Api Reference</li>
<li className='pt-5'>SDKs</li>
</ul>
 </Link>
 
 </div>


 <div className='pb-10'>
 <Link href='/'>
 <ul>
 <li className='pt-5'>Contact</li>
 <li className='pt-5'>Support@cloudp2p.io</li>
 <li className='pt-5'>1234 eln street san Franciso,<br/> CA 94109 united state</li>
 </ul>
 </Link>
 
    </div>
    </div>
    
  )
}

export default Footer
