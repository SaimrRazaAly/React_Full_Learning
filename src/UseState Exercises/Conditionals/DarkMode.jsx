import React, { useState } from 'react'
import './DarkMode.css'
const DarkMode = () => {
const [toogle ,settoogle] =useState(false)

  return (
  <div className={toogle  ? 'dark' :'light'} >
    <button onClick={()=> settoogle(!toogle)}>{toogle  ? 'LightMode' :'DarkMode'}</button>
  </div>
  )
}

export default DarkMode
