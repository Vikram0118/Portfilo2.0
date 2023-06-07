import {useEffect, useRef} from 'react'
import { AiFillMail } from "react-icons/ai";
import {motion, useInView, useAnimation} from 'framer-motion'
import {Reveal} from '../utils'

const endVariant = {
  hidden :{
    opacity :0
  },
  visible : {
    opacity: 1,
    transition : {
      ease : 'easeInOut',
      duration : 1
    }
  }
}

const Contact = () => {

  const mainControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <section className="relative z-10 overflow-hidden" id="contact">
      <div className='max-w-4xl mx-auto text-white font-light'>
        <motion.div ref={ref} variants={endVariant} initial='hidden' animate={mainControls} className="flex flex-col items-center justify-center w-full gap-3 font-[350px]">

          <p className='text-center' > Shoot me an email if you want to connect! </p> 

          <Reveal>
            <a href="mailto:bob.ross@notreal.com" >
              <div className='flex items-center justify-center w-fit m-auto text-white gap-2'>
                <span className="text-yellow-300 hover:text-white"> 
                  <AiFillMail size="2.4rem" />
                </span>
                <span className="text-xl text-yellow-300 hover:text-white">vikrampalani0107@gmail.com</span>
              </div>
            </a>
          </Reveal>

          <p className='text-center'> You can also find me on Linkedin</p> 
        </motion.div>
      </div>
    </section>
  );
};

export default Contact
