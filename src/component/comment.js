import React from "react";
export default function Comment(props){
    return(
        <div>
            <h2>Comments Information</h2>

            <label> Id: {props.id}</label>
            <label>PostId: {props.post_id}</label>
            <label> name: {props.name}</label>
            <label> email {props.email}</label>
            <label> body: {props.body}</label>
        </div>
    );
}

 