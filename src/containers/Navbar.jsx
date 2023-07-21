import React, {useState} from 'react'
import {navLinks} from '../constants'
import {AnimatePresence, motion} from 'framer-motion'
import {close, menu} from '../assets'

const pathVariants = {
  hidden : {
    opacity : 0,
    pathLength : 0
  },
  visible : {
    opacity : 1,
    pathLength : 1,
    transition : {
      duration : 1.5,
      ease : 'easeInOut'
    }
  }
}

const meuVariants = {
  hidden : {
    opacity : 0,
    x:'50vw'
  },
  visible : {
    opacity : 1,
    x:0,
    transition : {
      duration : 0.2,
      ease : 'linear'
    }
  },
  exit : {
    opacity : 0,
    x:'50vw'
  }
}


const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className="w-screen fixed z-30 bg-black px-2 py-4 backdrop-blur-xl backdrop-filter bg-opacity-30 ">
      <div className="max-w-4xl mx-auto  ">
        <div className="flex items-center justify-between">

          <a href='#'>
          <svg width="150" height="45" viewBox="0 0 103 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path className='hover:stroke-white' variants={pathVariants} initial='hidden' animate='visible' d="M3.49978 28.5301C1.27965 24.4069 2.0961 9.85438 2.29757 14.5329C2.6823 23.4668 3.17194 32.7868 4.78434 41.5922C5.64206 46.2763 9.19514 50.9144 11.2187 43.9852C11.476 43.104 12.7231 35.1768 12.8812 37.548C13.0479 40.0489 13.5466 42.5998 15.8085 39.5061C22.8161 29.9217 19.6499 49.0323 27.1027 41.8935C29.5961 39.5051 30.1984 36.4879 30.442 33.1627C31.1514 23.4806 31.3224 13.6135 31.1525 3.91217C31.0712 -0.73112 30.6924 3.10198 30.5841 4.34132C30.164 9.15187 30.0473 13.9838 29.993 18.8102C29.905 26.628 32.1793 49.6692 29.6747 42.263C28.5625 38.9744 29.3337 34.3951 30.2743 31.2045C30.5128 30.3956 35.1799 22.1844 35.4098 27.0835C35.5225 29.4844 30.7403 34.6411 33.0226 33.8874C35.642 33.0223 37.3467 38.3631 38.2718 39.8386C42.8788 47.1874 43.219 28.7 45.9139 31.6052C46.3371 32.0615 47.159 35.0291 47.8777 34.7997C48.8441 34.4911 52.2768 29.134 53.0758 31.0055C54.1927 33.6217 53.6604 38.2552 52.2175 40.6771C50.8888 42.9073 53.0407 35.5047 54.0193 33.1001C55.917 28.4376 58.0441 30.19 59.2771 34.2597C59.415 34.7151 59.8126 40.1328 60.573 39.256C62.9014 36.5717 66.4902 26.3939 68.883 34.4984C70.3585 39.4959 72.5295 30.6204 75.8602 33.1683C77.6232 34.517 79.9725 32.6791 81.5073 31.7814C85.7403 29.3055 86.279 29.9549 90.6301 31.2983C94.9561 32.6339 99.4182 24.4673 101.157 25.4607" stroke="yellow" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          </a>

          <div className="hidden md:block">
            <ul className='list-none hidden sm:flex flex-row space-x-8 text-2xl font-light overflow-hidden px-auto'>
              {navLinks.map((link) => (
                <motion.li 
                  key={link.id} 
                  initial={{ y: 70 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className='inline-block'
                >
                  <a href={`#${link.id}`} className='hover:text-yellow-300 text-white'>{link.title}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          {/* mobile nav bar menu */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle) } />
          <AnimatePresence>
            {toggle && (
              <motion.div 
              variants={meuVariants} 
              initial='hidden' 
              exit='exit'
              animate={toggle ? 'visible' : 'hidden'}
              className='flex p-6 black-gradient absolute top-20 right-0 mx-2 my-2 min-w-[140px] z-50 rounded-lg bg-black text-yellow-300'
              >
                <ul className='list-none flex justify-end items-start flex-col gap-4'>
                  {navLinks.map((link) => (
                    <li key={link.id} className='hover:text-white text-xl font-extralight cursor-pointer' onClick = {() => { 
                      setToggle(!toggle)
                      }}>
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar