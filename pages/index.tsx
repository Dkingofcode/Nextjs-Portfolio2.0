import Image from 'next/image';
//import { Inter } from 'next/font/google'
import Head from "next/head";
//const inter = Inter({ subsets: ['latin'] })
import Header from "../components/Header";
import type { NextPage } from 'next';
import About from '../components/About';

const Home: NextPage = () => {
  return (
      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7A80A]/80'>
        <Head>
          <title>David's Portfolio</title>
        </Head>
         
         <Header />
  
          {/* Hero
         <section id='hero' className='snap-start'>
          <Hero />
         </section>
  
          {/* About  /*}
          <section id='about' className='snap-center'>
          <About />
         </section>
  
          {/* Experiences 
            <section id="experience" className='snap-center'>
             <WorkExperience />
            </section>
  
           
          {/* Skills 
           <section id='skills' className='snap-start'>
            <Skills /> 
           </section> 
  
          {/* Projects 
          <section id='projects' className='snap-start'>
            <Projects /> 
           </section>
  
  
          {/* Contact me 
             <section id='contact' className='snap-start'>
               <ContactMe />
             </section> 
             */}
      </div>
    );
  };
  
  export default Home;

