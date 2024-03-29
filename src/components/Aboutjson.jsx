import React,{useRef, useEffect} from 'react'
import {Reveal} from '../utils'
import {motion, useInView, useAnimation} from 'framer-motion'

const Aboutjson = () => {

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
    <div id='AboutMe' className='scroll-mt-20 max-w-4xl mx-auto mb-28 mt-32 px-'>
      <div className=' w-full rounded-t-md p-2'>
        <Reveal>
          <p className='text-2xl md:text-5xl xl:text-6xl text-white font-extrabold mb-5'>About_me<span className='text-main1'>.json</span></p>
        </Reveal>
      </div>
      <motion.div 
        ref={ref}

        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75 }}
        className=' flex flex-col h-auto  text-white bg-opacity-50 backdrop-filter backdrop-blur-lg bg-black px-4 sm:p-2 rounded-lg '>
          <div className='flex flex-col gap-2 px-3 py-2 text-base md:text-xl font-extralight'>
              <p className='font-light text-2xl md:text-3xl text-yellow-500'>&#123;</p>
              <div className='flex flex-col gap-1 pl-10'>
                  <p><span className='text-red-500'>"name"</span> : <span className='text-green-400'>"Vikram P" <span className='text-white'>,</span></span></p>
                  <p><span className='text-red-500'>"title"</span> : <span className='font-light text-pink-600'>[</span>  <br/>
                    <span className='pl-10 text-green-400'>"Web developer" <span className='text-white'>,</span></span> <br/>
                    <span className='pl-10 text-green-400'>"Cloud Enthusiast"</span> <br />
                    <span className='font-light text-pink-600'>]</span>  , 
                  </p>
                  <p><span className='text-red-500 '>"location"</span> : <span className='text-green-400'>"Puducherry , India" <span className='text-white'>,</span></span></p>
                  <p><span className='text-red-500 '>"bio"</span> : <span className='text-green-400'>"As a dedicated web developer, I am passionate about delivering high-quality solutions, constantly learning and staying up-to-date with the latest technologies to provide innovative and efficient results." <span className='text-white'>,</span></span></p>
                  <p><span className='text-red-500 '>"education"</span> : <span className='font-light text-pink-600'>&#123;</span> 
                  <div className='pl-10'>
                    <p><span className='text-red-500 '>"college"</span> : <span className='text-green-400'>"B.Tech - Information Technology - PTU" <span className='text-white'>,</span></span></p>
                    <p><span className='text-red-500 '>"school"</span> : <span className='text-green-400'>"New Modern Vidhya Mandir Hr. Sec. School"</span></p>
                  </div>
                  <p className='font-light text-pink-600'>&#125;</p>
                  </p>
              </div>
              <p className='font-light text-2xl md:text-3xl text-yellow-500'>&#125;</p>
          </div>

      </motion.div>
    </div>
  )
}

export default Aboutjson