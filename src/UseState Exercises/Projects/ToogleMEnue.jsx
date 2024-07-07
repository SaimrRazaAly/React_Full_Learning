import React, { useState } from 'react'
import './ToogleMenu.css'
const ToogleMEnue = () => {
const [showMenu,setshowMenu] =useState(false)


  return (
   <>
   <button className='toogle-btn' onClick={()=>setshowMenu(!showMenu)}>{showMenu ? 'hide':'Show'}</button>
   <div className={`menu ${showMenu ? 'active-menu':''}`}>

    <div className="ul">
      <li><a href="#">Home</a></li>
      <li><a href="#">Servies</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Destination</a></li>
      <li><a href="#">contact US</a></li>
    </div>
   </div>
   </>
  )
}

export default ToogleMEnue
