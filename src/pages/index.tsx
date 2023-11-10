import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar/NavBar'
import Footer from '@/components/Footer/Footer'
import Body from '@/components/Body/Body'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
     <NavBar/>
     <Body/>
     <Footer/>
   </div>
  )
}
