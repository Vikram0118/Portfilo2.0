
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
        <Reveal delay={0}>
          <p className='text-4xl md:text-7xl lg:text-7xl xl:text-8xl font-sans font-black text-white bg-black px-2 md:px-0 py-2 md:py-0 sm:bg-transparent'>
            Hi, I'm <span className='text-yellow-300'>V</span>ikram<span className='text-yellow-300'>.</span>
          </p>
        </Reveal>
        <Reveal>
            <p className='text-xl lg:text-3xl xl:text-4xl font-light text-white py-2 px-2 md:px-0 bg-black sm:bg-transparent '>
              I' m a <span className='text-yellow-300'>Web Developer<span className='text-white'>.  </span></span>
            </p>
        </Reveal>
        <div className='flex text-white w-fit gap-2 overflow-hidden'>
          <motion.span
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            className='hover:text-yellow-300'
          >
            <a href='https://www.linkedin.com' target='_blank' rel='nofollow'>
              <AiFillLinkedin size='2.4rem' />
            </a>
          </motion.span>

          <motion.span
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            className='hover:text-yellow-300'
          >
            <a href='https://www.github.com' target='_blank' rel='nofollow'>
              <AiFillGithub size='2.4rem' />
            </a>
          </motion.span>
        </div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1 }} 
          onClick={() => window.open('/src/assets/vikram_resume.pdf')}
          className='appearance-none font-light px-4 py-2 rounded-sm text-yellow-300 border-[1px] border-yellow-300 w-fit mt-4 p-2 pl-5 pr-5 bg-transparent text-lg transition-colors duration-700 transform hover:bg-white hover:border-white hover:text-black focus:border-yellow-300'
        >
          Download CV
        </motion.button>
      </div>

      <motion.img 
        initial ={{opacity : 0}}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        src={Profilepic} 
        alt='profile-pic' 
        className='w-60 h-70 md:w-80 md:h-80 z-10 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 pointer-events-none' />

    </div>

      <div className="z-0 absolute top-0 bottom-0 right-0 w-1/3 bg-yellow-300 "></div>
      <div className="z-0 absolute top-0 bottom-0 right-1/3 w-1 bg-yellow-300 mr-1"></div>
      <div className="z-0 absolute top-0 bottom-0 right-1/3 w-[3px] bg-yellow-300 mr-3"></div>
      <div className="z-0 absolute top-0 bottom-0 right-1/3 w-[2px] bg-yellow-300 mr-5"></div>
      <div className="z-0 absolute top-0 bottom-0 right-1/3 w-[1px] bg-yellow-300 mr-7"></div>

    </div>

  );
};

export default Hero;
