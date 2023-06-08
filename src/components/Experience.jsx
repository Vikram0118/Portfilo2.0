import React,{useEffect, useRef} from 'react'
import {experienece} from '../constants'
import {Reveal} from '../utils'
import {motion, useInView, useAnimation} from 'framer-motion'

const Experience = () => {

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div className=' max-w-4xl mx-auto overflow-hidden my-5'>
      <div className=' w-full rounded-t-md p-2'>
        <Reveal>
          <p className='text-5xl text-white font-extrabold mb-5'>Experience<span className='text-yellow-300'>.</span></p>
        </Reveal>
      </div>
      <motion.div 
        ref={ref}
        variants={{
          initial:{ x: 800, opacity: 0 },
          visible:{ x: 0, opacity: 1 },
        }}
        initial='initial'
        animate={mainControls}
        transition={{ease:'easeInOut', duration: 1.3 }}

        className=' flex flex-col h-auto  text-white bg-opacity-20 backdrop-filter backdrop-blur-lg bg-gray-300 p-4 '>
          <div className='pl-10 pt-5'>
            <ol className="relative  border-gray-200 dark:border-gray-700"> 
                {experienece.map((exp) => (
                    <li className="flex items-center justify-start gap-5 mb-5 ml-6">            
                        <div className=" flex items-center justify-center w-20 h-20  ">
                            <img src={exp.icon} alt=""  className={`w-full h-full ${exp.icon == 'peerxp' ? 'p-3' : 'p-0'}`}/>
                        </div>
                        <div>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{exp.name}</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{exp.role} %</time>
                            <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">{exp.des}</p>
                        </div>

                    </li> 
                ))}    
            </ol>
          </div> 
      </motion.div>
    </div>
  )
}

export default Experience

