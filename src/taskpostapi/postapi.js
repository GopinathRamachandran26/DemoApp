import React from "react";
import axios from "axios";
import {  useState } from 'react';



export default function Postapi() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value })) 
    }

    const handleSubmit = (event) => {
        debugger;
        event.preventDefault();
        console.log(inputs);
       
        debugger;
       
        const data = {
        
            "id":1454,
            "post_id":123,
            "name": inputs.name,
            "email": inputs.email,
            "body": inputs.body
        
   
        };
        const headers = {
            'Authorization': 'Bearer 3bf677896018ce6e6b691b6daff346b1cf1c99e3c61bf546d82dcee860191fe3',
            'My-Custom-Header': 'foobar'
        };
        console.log(data)
        axios.post('https://gorest.co.in/public/v1/posts/123/comments', data, { headers })
            .then(response => {
                debugger;
                console.log(response);

               
            });
    }

   

    return (
        <form>
            <div>
                <h1>Postapi</h1>

            </div>
            <label>Name:</label>
            <input type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
            />

            <div> 
                <label>Email:</label>

                <input
                    type="text"
                    name="email"
                    value={inputs.email|| ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Body:</label>

                <input
                    type="text"
                    name="body"
                    value={inputs.body || ""}
                    onChange={handleChange}
                />
            </div>
            


            <div>
                <button onClick={(event) => handleSubmit(event)}> Submit </button>
                {inputs.article}
            </div>


        </form>
    )
}