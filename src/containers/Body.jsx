import React from 'react'
import {Aboutjson, Hero} from '../components'
import {Skills, Contact, Projects} from '../containers'

const Body = () => {
  
  return (
    <>
      <Hero />
      <Aboutjson />
      <Skills />
      <Projects />
      <Contact />
    </>
    )
}

export default Body