import React, { useState } from 'react'
import { questions } from '../FAQData/Data'
import Box from './Boxi'
import '../FAQ.css'

const FaqBox = () => {
  const [faqshow,setshowFaq] = useState(questions[0].id)

let faqTData = questions.map((details,i)=>{

  const FaqDetails={
    faqshow,
    setshowFaq,
    details,
  }
  // here we will pass the data
  return(
    <Box finalData={FaqDetails} key={i}/>

  )
})
  return (
<>
<div className="faqbox">

<h1>faq section</h1>
{faqTData}
</div>

</>
  )
}
export default FaqBox;
