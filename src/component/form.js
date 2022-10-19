import { useState } from "react";
import GetDAta from "../App";


export default function MyForm(props) {
  const [inputs, setInputs] = useState({name:props.name,email:props.email,body:props.body});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:</label>
      <input 
        type="text" 
        name="username" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      
      <div>
      <label>Enter your email:</label>

        <input 
          type="email" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </div>
        <div>
      <label>Enter your body:        </label>

        <input 
          type="text" 
          name="body" 
          value={inputs.body || ""} 
          onChange={handleChange}
        />
        </div>

        <input type="submit" />

        <div>
        <GetDAta/>
        </div>
    </form>

  )


}
