import React from 'react';
//const image = require("./Img/img2");
import { motion } from "framer-motion";
import img from "../public/Imgone.jpg";
import Imgfirst from "../public/Imgtwo.jpg";
import Image from 'next/image';


type Props = {};

function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }} 
    className='flex flex-col px-10 py-20 relative h-screen text-center md:text-left md:flex-row max-w-7xl px-50 justify-between mx-auto items-center'>
    <h3 className='absolute  top-4 uppercase lg:left-96   md:top-24  tracking-[20px] text-gray-500 text-2xl'>About</h3>
    {/* <motion.img src={img}  />  */}
     
      <Image src={Imgfirst} className="mb-20 md:mb-0 sm:mt-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[340px] xl:h-[450px]" width={150} height={150} alt='image' />
     
    <div className='space-y-50 px-0 md:px-10'>
       <h4 className='text-4xl font-semibold'>
        Here is a{" "}
        <span className='underline decoration-[#F7A80A]/50'>little</span>{" "} 
         background
       </h4> 
      <p className='text-base'> 
      I'm David. You might also know me as Dkingofcode. I'm a Frontend Deveoloper with over 3 years of experience, i've worked with startups and large companies to help build and scale their products.
      I also love helping others. </p>          
    </div>
    </motion.div>
  );
}

export default About;