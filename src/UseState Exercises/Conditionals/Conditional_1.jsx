import React, { useState } from "react";

const Conditional_1 = () => {
  const [magic, setmagic] = useState(false);

  return <>
  
  <button onClick={()=> setmagic(!magic)}>{(magic) ? 'hide': 'show'}</button>
  {(magic) ? <p>i am visible</p> : ""}</>;
};

export default Conditional_1;
