import React, { useState } from 'react'
import { questions } from '../FAQData/Data'
import './Tabs.css'
const Tabs = () => {
  const [activearea , setactivearea] = useState(0)
  const [activeContent,setactiveContent] = useState(questions[0])

  const changeData = (index)=>{
    setactivearea(index)
    setactiveContent(questions[index])
  }
  return (
    <>
<ul className='container'>
  {questions.map((value,index)=>{
    return(
      <li><button onClick={()=>changeData(index)} className={activearea==index ? 'active': '' }>{value.question}</button></li>
    )
  })}

</ul>

{
activeContent!=undefined ? 
<p>{activeContent.answer}</p>
:
''
}
    </>
  )
}

export default Tabs
