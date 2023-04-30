import Image from 'next/image';
//import { Inter } from 'next/font/google'
import Head from "next/head";
//const inter = Inter({ subsets: ['latin'] })
import Header from "../components/Header";
import type { NextPage } from 'next';


const Home: NextPage = () => {
  return (

    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <Header />
    </main>
  )
}

