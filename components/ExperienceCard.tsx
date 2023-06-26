import React from 'react';
import { motion } from "framer-motion"; 
import workimg from "../public/codecollaboimg.png";
import Image from 'next/image';
import logo from "../public/Reactlogo.png";
import logoreact from "../public/react3d.jpg";
import Node from "../public/Node.jslogo.png";

type Props = {};


const ExperienceCard = (props: Props) => {
  return (    
     <article className="">
       <motion.img
          initial={{
            y: -200,
            opacity: 0,
          }}  
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
          src="" alt="" 
       />
       <div className="px-10 md:px-20">
        <h4 className="text-4xl font-light">Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">Code Collabo</p>
        <div className="flex space-x-2 my-2">
          <img className="" src="https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg"  />
        </div>
       </div>
     </article>



    // <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#202020] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    //  <motion.img 
    //     initial={{
    //       y: -200,
    //       opacity: 0, 
    //     }}
    //     transition={{ duration: 1.2 }}
    //     whileInView={{ opacity: 1, y: 0}}
    //     viewport={{ once: true }} 
    //     className='w-32 h-32 rounded-full xl:w-[50px] xl:h-[100px] object-cover object-center'
    //     src={logo}  alt="work image"  />    
    //  <div className='px-0 md:px-10'>
    //     <h4 className='text-4xl font-light'>Software Engineer</h4>
    //     <p className='font-bold text-2xl mt-1'>Showlove.io</p>
    //  <div className='flex space-x-2 my-2'>
    //   <Image className='h-10 w-10 rounded-full'  src={logo} width={30} height={50} alt='' />
    //   <Image className='h-10 w-10 rounded-full' src={logoreact} width={30} height={50} alt='' />
    //   <Image className='h-10 w-10 rounded-full' src={Node} width={30} height={50} alt='' />
    //  </div>
    //  <p className='uppercase py-5 text-gray-300'>Started work... -- Ended....</p>
    //     ExperienceCard
    // <ul className='list-disc space-y-4 ml-5 text-md'>
    //   <li> Demonstrated proficiency in developing web applications using React, leveraging its component-based architecture, state management, and virtual DOM for efficient rendering and enhanced user experience.</li>    
    //   <li> Successfully collaborated with cross-functional teams, including designers and backend developers, to deliver feature-rich and visually appealing gift-sending platform. Actively participated in code reviews, brainstorming sessions, and agile development processes to ensure high-quality deliverables</li>    
    //   <li>Prioritized user-centric design principles and implemented responsive and intuitive user interfaces to enhance the overall user experience. Applied modern UI frameworks and libraries, such as Material-UI, to create visually appealing and interactive components.</li>    
    //   <li>Implemented performance optimization techniques, including lazy loading, code splitting, and caching mechanisms, to enhance the speed and responsiveness of the gift-sending platform. Employed React performance profiling tools to identify and resolve performance bottlenecks for optimal user engagement.</li>    
    // </ul>   
    // </div>
    // </article>
  );
}

export default ExperienceCard;