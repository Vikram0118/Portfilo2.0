
import React from 'react';
import { Profilepic } from '../assets';
import { motion } from 'framer-motion';
import { Reveal } from '../utils';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';



const Hero = ({mainColor, setMainColor}) => {

  let textColor = `text-${mainColor}`
  let hoverColor = `hover:text-${mainColor}`
  let borderColor = `border-${mainColor} border-[1px]`

  return (

    <div className='relative h-screen'>
    
    <div className='relative flex flex-col gap-10 sm:gap-0 sm:flex-row items-center justify-center md:justify-start h-screen max-w-4xl mx-auto px-5'>
      <div className=' z-40 w-fit flex flex-col items-start gap-1'>
        <div className='flex flex-row gap-2'>
          {/* <p onClick={() => {setMainColor('main1')}} className='bg-main1 rounded-full cursor-pointer w-3 h-3 md:w-5 md:h-5'></p>
          <p onClick={() => {setMainColor('main2')}} className='bg-main2 rounded-full cursor-pointer w-3 h-3 md:w-5 md:h-5'></p>
          <p onClick={() => {setMainColor('main3')}} className='bg-main3 rounded-full cursor-pointer w-3 h-3 md:w-5 md:h-5'></p>
          <p onClick={() => {setMainColor('main4')}} className='bg-main4 rounded-full cursor-pointer w-3 h-3 md:w-5 md:h-5'></p> */}
          <p className='bg-main1 rounded-full cursor-pointer w-3 h-3 md:w-5 md:h-5'></p>
          <p className='bg-main2 rounded-full cursor-pointer w-3 h-3 md:w-5 md:h-5'></p>
          <p className='bg-main3 rounded-full cursor-pointer w-3 h-3 md:w-5 md:h-5'></p>
          <p className='bg-main4 rounded-full cursor-pointer w-3 h-3 md:w-5 md:h-5'></p>
        </div>
        <Reveal delay={0}>
          <p className='text-4xl md:text-7xl lg:text-7xl xl:text-8xl font-sans font-black text-white bg-black px-2 md:px-0 py-2 md:py-0 sm:bg-transparent'>
            Hi, I'm <span className={textColor}>V</span>ikram<span className={textColor}>.</span>
          </p>
        </Reveal>
        <Reveal>
            <p className='text-xl lg:text-3xl xl:text-5xl font-light text-white py-2 px-2 md:px-0 bg-black sm:bg-transparent '>
              I' m a <span className={textColor}>Web Developer<span className='text-white'>.  </span></span>
            </p>
        </Reveal>
        <div className='flex text-white w-fit gap-2 overflow-hidden'>
          <motion.span
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            className={`hover:${textColor}`}
          >
            <a href='https://www.linkedin.com' target='_blank' rel='nofollow'>
              <AiFillLinkedin size='2.4rem' />
            </a>
          </motion.span>

          <motion.span
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            className={hoverColor}
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
          href="https://drive.google.com/file/d/1sjna7vMiKka5tEYHHLRBZCS-BSYRufzK/view?usp=sharing"
          target='_blank'
          className={`appearance-none font-normal px-4 py-2 rounded-sm ${textColor} ${borderColor} w-fit mt-4 p-2 pl-5 pr-5 bg-transparent text-sm lg:text-lg transition-colors duration-700 transform hover:bg-white hover:border-white hover:text-bgdark focus:border-main`}
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

      <div className={`z-0 absolute top-0 bottom-0 right-0 w-1/3 bg-${mainColor}`}></div>
      <div className={`z-0 absolute top-0 bottom-0 right-1/3 w-1 bg-${mainColor} mr-1`}></div>
      <div className={`z-0 absolute top-0 bottom-0 right-1/3 w-[3px] bg-${mainColor} mr-3`}></div>
      <div className={`z-0 absolute top-0 bottom-0 right-1/3 w-[2px] bg-${mainColor} mr-5`}></div>
      <div className={`z-0 absolute top-0 bottom-0 right-1/3 w-[1px] bg-${mainColor} mr-7`}></div>

    </div>

  );
};

export default Hero;
