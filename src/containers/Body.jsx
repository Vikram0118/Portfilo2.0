import React from 'react'
import {Aboutjson, Hero} from '../components'
import {Skills, Contact, Header, Projects} from '../containers'

const Body = () => {
  
  return (
    <div className='relative'>
      <Hero />
      <Aboutjson />
      <Skills />
      <Projects />
      <Contact />
    </div>
    )
}

export default Body