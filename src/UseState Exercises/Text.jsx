import React, { useState } from 'react'
import './btn.css'
const Text = () => {
let result;
  const [pshow , setshow] =useState(true)

if(pshow){
result = <> <h1>H! I am Alive</h1> <button onClick={()=> setshow(false)}>Hide</button></>
// result = <><button onClick={()=> setshow(!pshow)}>Hide</button> <h1>H! I am Alive</h1></>
}
else{
  
result = <button onClick={()=> setshow(true)}>show</button>
// result = <button onClick={()=> setshow(!pshow)}>show</button>
}
  return (
  <>
<div>
 {result}
<h1>jalksdjflkjlsdkf</h1>
</div>
  </>
  )
}

export default Text
