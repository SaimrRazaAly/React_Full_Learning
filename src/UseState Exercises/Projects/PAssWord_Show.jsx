import { useState } from "react"


const PAssWord_Show = () => {

  const [pdStatus,setpdStatus] = useState(false)
  return (
  <>
  <input type={(pdStatus) ? 'text' : 'password'} /> <button onClick={()=> setpdStatus(!pdStatus)}>{(pdStatus) ? 'hide' : 'show'}</button>
  </>
  )
}

export default PAssWord_Show
