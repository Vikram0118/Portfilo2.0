import React, {useState} from 'react'
import {Navbar, Body} from './containers'
import {Footer} from './components'

const App = () => {
  const [mainColor , setMainColor] = useState('main1')
  return (
    <>
      <div className='overflow-x-hidden bg-bgdark'>
        <Navbar 
          mainColor={mainColor}
        /> 
        <div className='relative z-0'>
          <Body
            mainColor={mainColor}
            setMainColor={setMainColor}
          />
          <Footer 
            mainColor={mainColor}
          />
        </div>
      </div>
    </>

  )
}

export default App