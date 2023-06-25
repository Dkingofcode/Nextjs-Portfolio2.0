import Image from 'next/image';
//import { Inter } from 'next/font/google'
import Head from "next/head";
//const inter = Inter({ subsets: ['latin'] })
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Header from "../components/Header";
import type { NextPage } from 'next';
import About from '../components/About';
import Skill from '../components/Skill';
import Skills from "../components/Skills";
import WorkExperience from '../components/WorkExperience'; 


const Home: NextPage = () => {

  interface DivProps {
    className?: string;
    children?: React.ReactNode;
  }

  const MyDiv: React.FC<DivProps> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
  };

  
  return (
      <MyDiv className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7A80A]/80'>
        <Head children={undefined}>
          <title>David's Portfolio</title>
        </Head>
         
         <Header />
  
          {/* Hero */}
         <section id='hero' className='snap-start'>
          <Hero />
         </section>
  
           
  
          {/* Contact me 
             <section id='contact' className='snap-start'>
               <ContactMe />
             </section> 
             */}
      </MyDiv>
    );
  };
  
  export default Home;

