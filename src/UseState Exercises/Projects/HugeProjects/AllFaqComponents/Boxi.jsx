import React from 'react'

const Box = ({finalData}) => {
  const {faqshow,
    setshowFaq,
    details} = finalData
  return (
    <>
    <div className="faqitem">
      <h2 onClick={()=> setshowFaq(details.id)}>{details.question}</h2>
      <p className={`para ${faqshow == details.id ? 'showAnswer' : ''}`}>{details.answer}</p>
    </div>
    </>
  )
}

export default Box
