import React from 'react'
import {BallCanvas} from '../components/canvas'
import {technologiesAtWork, technologiesForFun} from '../constants'
import {Experience, Certification} from '../components'
import {Reveal} from '../utils'

const Skills = () => {
  return (
    <div id='Skills' className='scroll-mt-[125px] max-w-4xl mx-auto my-16'>

      <Reveal>
        <p className='text-5xl text-white font-extrabold mb-5'>Skills<span className='text-yellow-300'>.</span></p>
      </Reveal>

      <div>
        <Reveal>
          <p className='text-2xl text-white font-light'>Things I use at work</p>
        </Reveal>
        <div className='flex flex-wrap justify-center'>
          {technologiesAtWork.map((technology) => (
            <div className='w-1/5 p-1' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
            ))}
        </div>
      </div>

      <div>
        <Reveal>
          <p className='text-2xl text-white font-light '>Things I use for Fun</p>
        </Reveal>
        <div className='flex flex-wrap justify-center'>
        {technologiesForFun.map((technology) => (
          <div className='w-1/5 p-1' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      
      </div>
      <Experience />
      <Certification />
    </div>
  )
}

export default Skills