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
    <div id='AboutMe' className='scroll-mt-20 max-w-4xl mx-auto '>
      <div className=' w-full rounded-t-md p-2'>
        <Reveal>
          <p className='text-5xl text-white font-extrabold mb-5'>About_me<span className='text-yellow-300'>.json</span></p>
        </Reveal>
      </div>
      <motion.div 
        ref={ref}
        // variants={{
        //   initial:{ x: 400, opacity: 0 },
        //   visible:{ x: 0, opacity: 1 },
        // }}
        // initial='initial'
        // animate={mainControls}
        // transition={{ease:'easeInOut', duration: 1 }}

        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75 }}

        className=' flex flex-col h-auto  text-white bg-opacity-10 backdrop-filter backdrop-blur-lg bg-gray-300 p-4 rounded-xl '>
          <div className='flex flex-col gap-2 px-3 py-2 text-xl font-extralight'>
              <p>&#123;</p>
              <div className='flex flex-col gap-2 pl-10'>
                  <p><span className='text-red-600'>"name"</span> : <span className='text-blue-600'>"Vikram P" ,</span></p>
                  <p><span className='text-red-600'>"title"</span> : [ <br/>
                    <span className='text-blue-600 pl-10'>"React JS developer" ,</span> <br/>
                    <span className='text-blue-600 pl-10'>"Django developer" ,</span> <br />
                    <span className='text-blue-600 pl-10'>"Gamer"</span> <br/>
                  ] ,
                  </p>
                  <p><span className='text-red-600'>"location"</span> : <span className='text-blue-600'>"Puducherry , India" ,</span></p>
                  <p><span className='text-red-600'>"bio"</span> : <span className='text-blue-600'>"Hardworking and dedicated web developer with a strong commitment to delivering high-quality solutions. Passionate about continuously learning and staying up-to-date with the latest technologies to provide efficient and innovative web development services." ,</span></p>
                  <p><span className='text-red-600'>"education"</span> : &#123;
                  <div className='pl-10'>
                    <p><span className='text-red-600'>"college"</span> : <span className='text-blue-600'>"B.Tech - Information Technology - PTU" ,</span></p>
                    <p><span className='text-red-600'>"school"</span> : <span className='text-blue-600'>"New Modern Vidhya Mandir Hr. Sec. School"</span></p>
                  </div>
                  <p>&#125;</p>
                  </p>
              </div>
              <p>&#125;</p>
          </div>

      </motion.div>
    </div>
  )
}

export default Aboutjson