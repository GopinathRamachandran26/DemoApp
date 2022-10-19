import { useState } from "react";
import Inputsdata from "./inputsdata";
import  EnrollTable from "../Admission/enrolltable";


export default function Student(props) {
  const [inputs, setInputs] = useState({ studentname: props.studentname, fathername: props.fathername, mothername: props.mothername, address: props.address ,dob:props.dob});

    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    console.log(inputs);
    //props.enroleStudent(inputs);
  }
  const handleAdd =(event)=>{
    debugger;
    props.enroleStudent(inputs);
  }
  const handleRemove =(event)=>{
    props.removeStudent();
  }




  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Student Addmision form</h1>
        
      </div>
      <label>Student Name:</label>
      <input
        type="text"
        name="studentname"
        value={inputs.studentname || ""}
        onChange={handleChange}
      />  

      <div>
        <label>Father name:</label>

        <input
          type="text"
          name="fathername"
          value={inputs.fathername || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Mother Name:</label>

        <input
          type="text"
          name="mothername"
          value={inputs.mothername || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={inputs.address || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>DOB:</label>
        <input
          type="date"
          name="dob"
          value={inputs.dob || ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <button onClick={(event) => handleAdd(event)}> Add </button>
        <button onClick={(event)=> handleRemove(event)}> Remove </button>
      </div>
      
     
    </form>
  )
}