import React, {useState} from 'react'
import {sun, moon} from './import'
import {motion} from 'framer-motion'

const Toggle = () => {

    const sunVariant = {
        hidden :{
        },
        visible: {
            rotate: [0, 360], 
            transition: {
              duration: 5, 
              ease :'linear',
              repeat: Infinity, 
              repeatType: "loop", 
            },
          },
    }

    const [checked, setChecked] = useState(false);

    const handleToggle = () => {
      setChecked(!checked);
    };

  return (
    <div className='flex gap-2 items-center justify-center'>
        <motion.img src={sun} alt="sun" variants={sunVariant} animate='visible' className='w-10 h-10'/>

        <label htmlFor="toggle" className="relative inline-block w-10 h-6 bg-black rounded-full">
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={checked}
            onChange={handleToggle}
          />
          <div className={`w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${
            checked ? 'bg-green-500 transform translate-x-3/4' : 'bg-white'
          }`}></div>
        </label>
        
        <img src={moon} alt="" />
    </div>
  )
}

export default Toggle