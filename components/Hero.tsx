import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter"; 
import BackgroundCircles from './BackgroundCircles';
import { Link } from 'react-router-dom';
import Image from 'next/image';
import imageone from "../public/Imgthree.jpg";

//const logo = require("./Img/img1.JPG");

type Props = {};

export default function Hero({}: Props) {
  const [text, count]  = useTypewriter({
    words:[
       "Hi, My name is David",
       "A-man-with-a-passion-for-code.tsx",
       "<ButLovesTohelpOthers />" 
    ],
    loop: true,
    delaySpeed: 2000,
  });

    return (
    <div className="h-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden">
     <BackgroundCircles />
     <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={imageone} width={0} height={0} alt="my profile picture" />
     <div className='z-20'>
      <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>  
     <h1 className='text-5xl lg:text-4xl font-semibold px-10'>
       <span className='mr-3'>{text}</span>
       <Cursor cursorColor='#F7A80A' /> 
     </h1>
      <div className='pt-5'>
        {/* <Link href="#about">
        <button className='heroButton'>About</button>
        </Link>
        <Link href="#experience">
        <button className='heroButton'>Experience</button>
        </Link>
        <Link href="#skills">
        <button className='heroButton'>Skills</button>
        </Link>
        <Link href="#projects">
        <button className='heroButton'>Projects</button>
        </Link> */}
      </div>

     </div>
    </div>
  );
}