import React from 'react'
import {Navbar, Body} from './containers'
import {Footer} from './components'

const App = () => {
  return (
    <>
      <div className='overflow-x-hidden bg-black'>
        <Navbar /> 
        <div className='relative z-0'>
          <Body />
          <Footer />
        </div>
      </div>
    </>

  )
}

export default App