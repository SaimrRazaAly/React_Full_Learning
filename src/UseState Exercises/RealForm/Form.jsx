// import React, { useState } from "react";
// import "./FormSyle.css";
// const Form = () => {
//   let [formData, setformData] = useState({
//     uname: "",
//     uemail: "",
//     upassword: "",
//     uphone: "",
//     umessage: "",
//     index: "",
//   });

//   let getvalue = (event) => {
//     let oldData = { ...formData };
//     let inputName = event.target.name; //it will tell me the name of the input on which i am working
//     let Namevalue = event.target.value; //it will tell the value
//     oldData[inputName] = Namevalue;
//     setformData(oldData);
//   };

//   let [userData, setuserData] = useState([]);
//   const handleSubmit = (event) => {
//     let currentData = {
//       uname: formData.uname,
//       uemail: formData.uemail,
//       upassword: formData.upassword,
//       uphone: formData.uphone,
//       umessage: formData.umessage,
//     };

//     let oldData = { ...userData, currentData };
//     setuserData(oldData.currentData);
//     console.log(userData);
//     // console.log(currentData);
//     event.preventDefault();
//   };

//   return (
//     <>

//       <div className="container">
//         <form className="form" onSubmit={handleSubmit}>
//           <h2>Contact Us</h2>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="uname"
//             onChange={getvalue}
//             value={formData.uname}
//             />
//           <label>Email:</label>
//           <input
//             type="email"
//             name="uemail"
//             onChange={getvalue}
//             value={formData.uemail}
//             />
//           <label>PAssword:</label>
//           <input
//             type="password"
//             name="upassword"
//             onChange={getvalue}
//             value={formData.upassword}
//           />
//           <label>Number:</label>
//           <input
//             type="number"
//             name="uphone"
//             required
//             onChange={getvalue}
//             value={formData.uphone}
//           />

//           <label>Message:</label>
//           <textarea
//             name="umessage"
//             rows="4"
//             required
//             onChange={getvalue}
//             value={formData.umessage}
//           ></textarea>

//           <button type="submit">{formData.index == '' ? 'save' :'update'}</button>
//             {userData.length}
//         </form>
//       </div>
//       {/* now here we will add table */}
//       <div className="table-area">
//         <table>
//           <thead>
//             <tr className="bold">
//               <td>Name</td>
//               <td>Email</td>
//               <td>Password</td>
//               <td>Phone No</td>
//               <td>Message</td>
//             </tr>
//           </thead>

//           {
//           userData.length >=1 ?
//           userData.map((obj, i) => {
//             return (
//               <>
//                 <td>{obj.uname}</td>
//                 <td>Email</td>
//                 <td>Password</td>
//                 <td>Phone No</td>
//                 <td>Message</td>
//               </>
//             )})

//             :

//             <h1>No Data Enterd</h1>
//           }
//         </table>
//       </div>
//     </>
//   );
// };

// export default Form;

// New Code For Form Componnet
import { useState } from "react";
import "./FormSyle.css";
const Form = () => {
  const [formData, setformData] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index: "",
  });

  let [userData, setuserData] = useState([]);
  // console.log(userData);

  let getValue = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setformData(oldData);
    // console.log(inputName, inputValue, oldData);
  };
  const handleSubmit = (event) => {
    let currentData = {
      uname: formData.uname,
      uemail: formData.uemail,
      upassword: formData.upassword,
      uphone: formData.uphone,
      umessage: formData.umessage,
    };
    // alert(userData.length)
    // console.log(formData)
  let UserDatafilter = userData.filter(value => value.uemail == formData.uemail || value.uphone == formData.uphone);
    if (UserDatafilter.length ==1) {
      alert("Phone Number Or Email Already Exist...");
    } else {
      let allUserData = [...userData, currentData];
      // console.log(allUserData);
      // console.log(userData);
      setuserData(allUserData);
      setformData({
        uname: "",
        uemail: "",
        uphone: "",
        umessage: "",
        index: "",
      });
    }
   event.preventDefault();
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={getValue}
          name="uname"
          value={formData.uname}
          required
          placeholder="enter someting..."
        />
        <label>Email</label>
        <input
          type="text"
          onChange={getValue}
          name="uemail"
          value={formData.uemail}
          placeeholder="enter someting..."
        />
        <label>Phone</label>
        <input
          type="text"
          onChange={getValue}
          name="uphone"
          value={formData.uphone}
          placeholder="enter someting..."
        />
        <label>Message</label>
        <textarea
          rows={3}
          onChange={getValue}
          name="umessage"
          value={formData.umessage}
        ></textarea>

        <button>{formData.index === "" ? "save" : "update"}</button>
      </form>

      <div className="table-area">
      
        <table>
          <thead>
            <tr className="bold">
              <td>Name</td>
              <td>Email</td>
              <td>Phone No</td>
              <td>Message</td>
            </tr>
          </thead>
<tbody>
  
          {userData.length >0 ? (
            userData.map((obj, i) => {
              return (
                <>
                  <tr>
                    <td>{i+1}</td>
                    <td>{obj.uname}</td>
                    <td>{obj.uemail}</td>
                    <td>{obj.uphone}</td>
                    <td>{obj.umessage}</td>
                  </tr>
                </>
              );
            })
          ) : (
            <tr>No Data Enterd</tr>
          )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
