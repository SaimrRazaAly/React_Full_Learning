import React, { useState } from "react";
import './FAQ.css'
import { questions } from "./FAQData/Data";
const FAQSection = () => {
  
  const [showFaq,setshowFaq] = useState(questions.id) 


  return <>
<h1>FAQ Section using React</h1>
<div className="faqbox">
  { questions.map((item,i)=>{
return(

  <div className="faqitem" key={i}>
    <h2 onClick={()=>setshowFaq (item.id)}>{item.question}</h2>
    <p className={`para ${showFaq == item.id ? 'showAnswer':''}`} >{item.answer}</p>
  </div>
  )
  }) }
</div>
  </>;
};

export default FAQSection;
