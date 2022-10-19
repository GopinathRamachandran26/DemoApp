import axios from "axios";
import { useEffect, useState } from "react";
//import Inputsdata from "./inputsdata";
//import  EnrollTable from "../Admission/enrolltable";


export default function Postform(props) {
  const [inputs, setInputs] = useState({ email: props.Email,
    gender: props.gender, 
    status: props.status, id: props.id ,name:props.name});

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

      debugger;
       // POST request using axios with set headers
       const article1 = { title: 'React POST Request Example' };
       const data = {
       "id":1454,
       "post_id":123,
       "name":inputs.name,
       "email":inputs.email,
       "body":inputs.status
      };
      
       const headers = { 
           'Authorization': 'Bearer 03aeb2fe2c2e9e6daf62be01570fdafc43cf4d2884e6bb3dae6b84d17eb1e920',
           'My-Custom-Header': 'foobar'
       };
       axios.post('https://gorest.co.in/public/v1/posts/123/comments', data, { headers })
           .then(response => {
             console.log(response);
             if(response.statusText=="Created")
              alert("Message posted");
              else{
                alert("errror while posting");
              }
              //this.setState({ articleId: response.data.id });
           });
  
  }
  const handleAdd =(event)=>{
    debugger;
    props.enroleStudent(inputs);
  }
  const handleRemove =(event)=>{
    props.removeStudent();
  }




  return (
    <form >
      <div>
        <h1>Post form</h1>
        
      </div>
      <label>email:</label>
      <input
        type="email"
        name="email"
        value={inputs.email || ""}
        onChange={handleChange}
      />  

      <div>
        <label>gender:</label>

        <input
          type="text"
          name="gender"


          value={inputs.gender|| ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>status:</label>

        <input
          type="text"
          name="status"
          value={inputs.status || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>id:</label>
        <input
          type="id"
          name="id"
          value={inputs.id || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>name:</label>
        <input
          type="text"
          name="name"
          value={inputs.name|| ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <button onClick={(event) => handleAdd(event)}> Enroll </button>
        <button onClick={(event)=> handleRemove(event)}> Remove </button>
      </div>
    <div>
    <button onClick={(event) => handleSubmit(event)}> Submit </button>

      </div>     
     
    </form>
  )
}