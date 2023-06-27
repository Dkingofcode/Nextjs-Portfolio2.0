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
import ContactMe from '@/components/ContactMe';
import { Link } from 'react-router-dom';
import imagefront from "../public/Netflix.jpg";
const Home: NextPage = () => {

  interface DivProps {
    className?: string;
    children?: React.ReactNode;
  }

  const MyDiv: React.FC<DivProps> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
  };

  
  return (
      <MyDiv className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7A80A]/80'>
        <Head children={undefined}>
          <title>David's Portfolio</title>
        </Head>
         
         <Header />
  
          {/* Hero */}
         <section id='hero' className='snap-start'>
          <Hero />
         </section>
  
         <section id='about' className='snap-center'>
          <About />
         </section>
           
           <section id='experience' className='snap-center'>
            <WorkExperience />
           </section>
  
          <section id="skills" className="snap-start">
            <Skills />
          </section>

          <section id="projects" className="snap-start">
            <Projects />
          </section>

           
             <section id='contact' className='snap-start'>
               <ContactMe />
             </section>

           
              <footer className="sticky bottom-5 w-full cursor-pointer">
               <div className="flex items-center justify-center">
                 <Image className="h-26 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                 src={imagefront} alt="bttom pointer" width={0} height={0}  />
               </div>
              </footer>
            
            
      </MyDiv>
    );
  };
  
  export default Home;

