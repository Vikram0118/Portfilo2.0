import React from 'react'
import { Profilepic, Blob } from './import'
import {AnimatePresence, motion} from 'framer-motion'
import {Reveal} from '../utils'
import {
  AiFillLinkedin,
  AiFillGithub
} from 'react-icons/ai';

const Hero = () => {

  return (
      <div className='h-screen flex flex-row items-center justify-evenly max-w-4xl mx-auto'>
        <div className='relative flex flex-col '>
          <Reveal>
            <p className='text-5xl font-extrabold text-white py-2'>Hi I'm Vikram<span className='text-yellow-300'>.</span></p>
          </Reveal>
          <Reveal>
            <p className='text-2xl font-normal text-white py-2'>I love <span className='text-yellow-300'>Coding, Learning and Gaming</span></p>
          </Reveal>
          <div className='flex text-white w-fit gap-2 overflow-hidden'>
          <motion.span
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ease:'easeInOut', duration: 1 }}
            className='hover:text-yellow-300'
          >
            <a href="https://www.linkedin.com" target="_blank" rel="nofollow">
              <AiFillLinkedin size="2.4rem" />
            </a>
          </motion.span>

          <motion.span
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ease:'easeInOut', duration: 1 }}
            className='hover:text-yellow-300'
          >
            <a href="https://www.github.com" target="_blank" rel="nofollow">
              <AiFillGithub size="2.4rem" />
            </a>
          </motion.span>

          </div>
          <motion.button 
            onClick={() => window.open("/pdf.pdf")} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ease:'easeInOut', duration: 2 }}
            className='appearance-none font-extralight px-4 py-2 rounded-sm text-yellow-300 bg-transparent border-[1px] border-yellow-300 w-fit mt-4 hover:shadow hover:text-white hover:border-white hover:shadow-white'>
          My Resume
        </motion.button>
        </div>

        <motion.div 
          initial={{y:-100,x:100,opacity: 0 }}
          animate={{y:0,x:0,opacity: 1 }}
          transition={{ duration:2.5 }}
          className='relative overflow-hidden'>
          <img src={Blob} alt="blob" className='z-10 w-[30vw] pointer-events-none' />
          <img 
            src={Profilepic} 
            alt="photo" 
            className='z-20 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 pointer-events-none'
          />
        </motion.div>

        
      </div>
  )
}

export default Hero