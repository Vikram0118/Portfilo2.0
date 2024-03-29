
import React from 'react';
import { Profilepic } from '../assets';
import { motion } from 'framer-motion';
import { Reveal } from '../utils';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';



const Hero = () => {
  return (

    <div className='relative h-screen'>
    
    <div className='relative flex flex-col gap-10 sm:gap-0 sm:flex-row items-center justify-center md:justify-start h-screen max-w-4xl mx-auto px-5'>
      <div className=' z-40 w-fit flex flex-col items-start gap-1'>
      <div className='flex flex-row gap-2 md:gap-3'>
          <p className='bg-main1 rounded-full cursor-pointer w-3 h-3 md:w-5 md:h-5'></p>
          <p className='bg-main2 rounded-full cursor-pointer w-3 h-3 md:w-5 md:h-5'></p>
          <p className='bg-main3 rounded-full cursor-pointer w-3 h-3 md:w-5 md:h-5'></p>
          <p className='bg-main4 rounded-full cursor-pointer w-3 h-3 md:w-5 md:h-5'></p>
        </div>
        <Reveal delay={0}>
          <p className='text-4xl md:text-7xl lg:text-7xl xl:text-8xl font-sans font-black text-white bg-black px-2 md:px-0 py-2 md:py-0 sm:bg-transparent'>
            Hi, I'm <span className='text-main1'>V</span>ikram<span className='text-main1'>.</span>
          </p>
        </Reveal>
        <Reveal>
            <p className='text-xl lg:text-3xl xl:text-5xl font-light text-white py-2 px-2 md:px-0 bg-black sm:bg-transparent '>
              I' m a <span className='text-main1'>Web Developer<span className='text-white'>.  </span></span>
            </p>
        </Reveal>
        {/* <div className='flex gap-2'>
            <p className='text-xl font-light text-white py-2 px-2 md:px-0 bg-black sm:bg-transparent '>React -</p>
            <p className='text-xl font-light text-white py-2 px-2 md:px-0 bg-black sm:bg-transparent '>Tailwind CSS -</p>
            <p className='text-xl font-light text-white py-2 px-2 md:px-0 bg-black sm:bg-transparent '>Framer -</p>
            <p className='text-xl font-light text-white py-2 px-2 md:px-0 bg-black sm:bg-transparent '>Django -</p>
            <p className='text-xl font-light text-white py-2 px-2 md:px-0 bg-black sm:bg-transparent '>AWS -</p>
            <p className='text-xl font-light text-white py-2 px-2 md:px-0 bg-black sm:bg-transparent '>DS Algo</p>
        </div> */}
        <div className='flex text-white w-fit gap-2 overflow-hidden'>
          <motion.span
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            className='hover:text-main1'
          >
            <a href='https://www.linkedin.com' target='_blank' rel='nofollow'>
              <AiFillLinkedin size='2.4rem' />
            </a>
          </motion.span>

          <motion.span
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            className='hover:text-main1'
          >
            <a href='https://www.github.com' target='_blank' rel='nofollow'>
              <AiFillGithub size='2.4rem' />
            </a>
          </motion.span>
        </div>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1 }} 
          href="https://drive.google.com/file/d/1Uqy_x9mejfa8AIcmBhImShVySmO5FGVw/view?usp=sharing"
          target='_blank'
          className='appearance-none font-normal px-4 py-2 rounded-sm text-main1 border-[1px] border-main1 w-fit mt-4 p-2 pl-5 pr-5 bg-transparent text-lg transition-colors duration-700 transform hover:bg-white hover:border-white hover:text-bgdark focus:border-main1'
        >
          Download CV
        </motion.a>
      </div>

      <motion.img 
        initial ={{opacity : 0}}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        src={Profilepic} 
        alt='profile-pic' 
        className='w-60 h-70 md:w-80 md:h-80 z-10 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 pointer-events-none' />

    </div>

      <div className="z-0 absolute top-0 bottom-0 right-0 w-1/3 bg-main1 "></div>
      <div className="z-0 absolute top-0 bottom-0 right-1/3 w-1 bg-main1 mr-1"></div>
      <div className="z-0 absolute top-0 bottom-0 right-1/3 w-[3px] bg-main1 mr-3"></div>
      <div className="z-0 absolute top-0 bottom-0 right-1/3 w-[2px] bg-main1 mr-5"></div>
      <div className="z-0 absolute top-0 bottom-0 right-1/3 w-[1px] bg-main1 mr-7"></div>

    </div>

  );
};

export default Hero;
