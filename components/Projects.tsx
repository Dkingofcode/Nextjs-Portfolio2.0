import React from 'react';
import { motion } from "framer-motion";
import imagenetflix from "../public/Netflix.jpg";
import Image from 'next/image';


type Props = {};

function Projects({}: Props) {
   const projects = [1, 2, 3, 4, 5]; 
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-x-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
         Projects
        </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
       {projects.map((project, i) => (
         <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
           <Image src={imagenetflix} width={150} height={150} 
           alt="goretre" 
           />
            
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-2xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                    Case Study {i + 1} of {projects.length};
                </span>{" "}
                UPS clone
                </h4>

                <p className='text-md text-center md:text-left'>
                   Netflix 2.0 app that has a log in and Log out Authentication with Google.
                   It has a beautiful Home Screen with all the movies looking just like Netflix.
                   There is also a subscription page where you can see your active monthly subscription.
                </p>
            </div>
         </div>
       ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7A80A]/10 left-0 h-[400px] -skew-y-12'>

      </div>
    </div>
  )
}

export default Projects;