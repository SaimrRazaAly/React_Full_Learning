import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import buttonModule from './Btn.module.css'
import { faFootball } from '@fortawesome/free-solid-svg-icons/faFootball'
const Btn = () => {
  return (
<>
{/* Certainly! Using CSS Modules in React offers several advantages:

Scoped Styles: Styles are scoped locally to the component, reducing the risk of global style conflicts.
Modularity: Each component can have its own CSS file, promoting modularity and reusability.
Dynamic Styling: You can easily integrate dynamic styles based on component state or props1. */}



<FontAwesomeIcon icon={faFootball}/>
<button className={buttonModule.danger}>Danger</button>
<button className={buttonModule.warning}>Warning</button>
<button className={buttonModule.normal}>Normal</button>
<button className={buttonModule.original}>Original</button>
</>
  )
}

export default Btn
