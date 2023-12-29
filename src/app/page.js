import Image from 'next/image'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Information from './component/Information'
import Download from './component/Download'
import Feeds from './component/Feeds'
import End from './component/End'
import Footer from'./component/Footer'
import Footer1 from'./component/Footer1'

export default function Home() {
  return (
    <main >

    <Navbar/>
    <Header/>
    <Information/>
    <Download/>
    <Feeds/>
    <End/>
    <Footer/>
    <Footer1/>
    </main>
  )
}