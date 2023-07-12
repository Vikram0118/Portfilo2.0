
import React from 'react';
import { Profilepic } from '../assets';
import { motion } from 'framer-motion';
import { Reveal } from '../utils';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Hero = () => {
  return (

    <div className='relative h-screen'>
    
    <div className='relative flex items-center justify-start h-screen max-w-4xl mx-auto'>
      <div className=' z-40 w-fit flex flex-col items-start'>
        <Reveal delay={0}>
          <p className='text-8xl font-sans font-black text-white'>
            Hi, I'm <span className='text-green-500'>V</span>ikr<span className='text-yellow-300'>a</span>m<span className='text-yellow-300'>.</span>
          </p>
        </Reveal>
        <Reveal>
          <p className='text-3xl font-light text-white py-2'>
            I' m a <span className='text-yellow-300'>Web Developer<span className='text-white'>.</span></span>
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
          onClick={() => window.open('/pdf.pdf')}
          className='appearance-none font-light px-4 py-2 rounded-sm text-yellow-300 border-[1px] border-yellow-300 w-fit mt-4 p-2 pl-5 pr-5 bg-transparent text-lg transition-colors duration-700 transform hover:bg-white  hover:text-black focus:border-yellow-300'
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
        className='z-10 absolute right-0 top-1/2 transform -translate-y-1/2 h-80 pointer-events-none w-80 ' />

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
