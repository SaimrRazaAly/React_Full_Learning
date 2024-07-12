import React, { useState } from "react";
import "./Form.css";
const ControlForm = () => {
  const [Uname, setUname] = useState("");
  const [Pass, setPass] = useState("");
  
      const handleFrom = (event)=>{
        event.preventDefault()
        console.log(Uname,Pass)
      }
  return (
    <>
      <div className="container">
        <form onSubmit={handleFrom}>

            <label>UserName</label>
            <input
              type="text" onChange={(event)=>setUname(event.target.value)}placeholder="Enter Your name eg @ahsd" value={Uname} className="input" />
 
            <label>Password</label>
            <input type="text"onChange={(event)=> setPass(event.target.value)} placeholder="Enter Your name eg @ahsd" value={Pass} className="input" />


<div>
  <button type="submit">Submit</button>
</div>
        </form>
      </div>
    </>
  );
};

export default ControlForm;
