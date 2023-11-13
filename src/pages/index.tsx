import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Subscribe from '@/components/SubscribeWindow'
import Head from 'next/head'
import Body from '@/components/Body'
import ResultContextProvider from '@/context/ResultContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>KoinX</title>
      </Head>
      <ResultContextProvider>
        <div>
          <NavBar />
          <Body />
          <Subscribe />
          <Footer />
        </div>
      </ResultContextProvider>
    </>
  );
}
