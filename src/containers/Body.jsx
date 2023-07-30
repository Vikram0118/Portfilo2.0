import React from 'react'
import {Aboutjson, Hero} from '../components'
import {Skills, Contact, Projects} from '../containers'

const Body = ({mainColor, setMainColor}) => {
  
  return (
    <>
      <Hero
        mainColor={mainColor}
        setMainColor={setMainColor}
      />
      <Aboutjson
        mainColor={mainColor}
      />
      <Skills 
        mainColor={mainColor}
      />
      <Projects
        mainColor={mainColor}
      />
      <Contact 
        mainColor={mainColor}
      />
    </>
    )
}

export default Body