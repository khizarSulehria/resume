import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import HomeComponent from '@/Components/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeComponent />
    </>
      
  )
}
