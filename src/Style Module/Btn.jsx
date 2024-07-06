import React from 'react'
import buttonModule from './Btn.module.css'
const Btn = () => {
  return (
<>
<button className={buttonModule.danger}>Danger</button>
<button className={buttonModule.warning}>Warning</button>
<button className={buttonModule.normal}>Normal</button>
<button className={buttonModule.original}>Original</button>
</>
  )
}

export default Btn
