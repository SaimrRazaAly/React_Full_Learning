import React, { useState } from "react";
import "./btn.css";
const Exe_1Btn = () => {
  const [count, setcount] = useState(0);

  let add = () => {
    setcount(count + 1);
  };
  let minus = () => {
    setcount(count - 1);
  };

  
  return (
    <div>
      <h1>This is the number {count}</h1>
      <button className="button-33" onClick={add}>
        Add
      </button>
      <button className="button-33" onClick={minus}>
        sub
      </button>
    </div>
  );
};

export default Exe_1Btn;
