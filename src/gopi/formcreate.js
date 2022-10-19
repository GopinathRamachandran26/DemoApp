

import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';



const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'gender', headerName: 'Gender', width: 300 }
]
  


export default function Formcreate() {
  const [inputs, setInputs] = useState({ });
  const [gridRowData, setgridRowData] = useState([{id:0,name:"Test",email:"admin@aathisoft.com",gender:"male" }]);

    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    debugger;
    
    setgridRowData(data=>([...data,inputs]))
    //console.log(inputs);
    //props.enroleStudent(inputs);
  }
  const handleRemove =(event)=>{
        setgridRowData.pop();
}


 

  return (
    <form>
      <div>
        <h1>Student Addmision form</h1>
        
      </div>
      <label>Id:</label>
      <input
        type="text"
        name="id"
        value={inputs.id || ""}
        onChange={handleChange}
      />  

      <div>
        <label>Name:</label>

        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>

        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          value={inputs.gender || ""}
          onChange={handleChange}
        />
      </div>

      {/* <div>
        <button onClick={(event) => handleAdd(event)}> Add </button>
        <button onClick={(event)=> handleRemove(event)}> Remove </button>
      </div> */}
      <button onClick={(event) => handleSubmit(event)}> sumbit</button>
       <button onClick={(event) => handleRemove(event)}> remove</button> 
     

      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={gridRowData}
        columns={columns}
        pageSize={100}
        checkboxSelection
      />
    </div>
    </form>

    
  )
}