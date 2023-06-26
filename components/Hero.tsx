import { Cursor, useTypewriter } from 'react-simple-typewriter'; 
import BackgroundCircles from './BackgroundCircles';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Image from 'next/image';
import React, { useContext } from 'react';
import imageone from "../public/Img.jpg";

//const logo = require("./Img/img1.JPG");

interface ButtonProps {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

const MyButton: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

type Props = {};

export default function Hero({}: Props) {
  const [text]  = useTypewriter({
    words:[
       "Hi, My name is David",
       "A-man-with-a-passion-for-code.tsx",
       "<ButLovesTohelpOthers />" 
    ],
    loop: true,
    delaySpeed: 2000,
  });

 // useContext(MyContext);


  interface DivProps {
    className?: string;
    children?: React.ReactNode;
  }

  const MyDiv: React.FC<DivProps> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
  };

    return (
    <div className="h-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden">
     <BackgroundCircles />
     <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={imageone} width={500} height={500} alt="my profile picture" />
     <div className='z-20'>
      <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
        Software Engineer
        </h2>  
     <h1 className='text-5xl lg:text-4xl font-semibold px-10'>
       <span className='mr-3'>{text}</span>
       <Cursor cursorColor='#F7AB0A' /> 
     </h1>
      <div className='pt-5'>

        <a href="#about">
        <MyButton className='heroButton'>About</MyButton>
        </a>
        <a href="#experience">
        <MyButton className='heroButton'>Experience</MyButton>
        </a>
        <a href="#skills">
        <MyButton className='heroButton'>Skills</MyButton>
        </a>
        <a href="#projects">
        <MyButton className='heroButton'>Projects</MyButton>
        </a>
      </div>

     </div>
    </div>
  );
}