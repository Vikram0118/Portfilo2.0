import React from 'react'
import {BallCanvas} from '../components/canvas'
import {technologiesAtWork, technologiesForFun} from '../constants'
import {Reveal} from '../utils'

const Skills = () => {
  return (
    <div id='Skills' className='scroll-mt-[120px] max-w-4xl mx-auto my-26 px-5'>

      <Reveal>
        <p className='text-2xl md:text-5xl text-white font-extrabold mb-5'>Skills<span className='text-yellow-300'>.</span></p>
      </Reveal>

      <div>
        <Reveal>
          <p className='text-base sm:text-xl lg:text-2xl text-white font-light'>Things I use <span className='text-yellow-300'>EveryDay</span> </p>
        </Reveal>
        <div className='flex flex-row flex-wrap justify-center gap-5 sm:gap-0'>
          {technologiesAtWork.map((technology) => (
            <div className='w-28 h-28 md:w-1/5 md:h-max' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
            ))}
        </div>
      </div>

      <div>
        <Reveal>
          <p className='text-base sm:text-xl lg:text-2xl text-white font-light '>Things I use for <span className='text-yellow-300'>Fun</span> </p>
        </Reveal>
        <div className='flex flex-row flex-wrap justify-center gap-5 sm:gap-0'>
        {technologiesForFun.map((technology) => (
          <div className='w-28 h-28 md:w-1/5 md:h-max' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Skills