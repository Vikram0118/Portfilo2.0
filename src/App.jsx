import React from 'react'
import {Navbar, Body} from './containers'
import {Stars} from './components/canvas'
import {Footer} from './components'

const App = () => {
  return (
    <>
      <div className='overflow-x-hidden bg-black'>
        <Navbar /> 
        <div className='relative z-0'>
          <Body />
          <Stars />
          <Footer />
        </div>
      </div>
    </>

  )
}

export default App