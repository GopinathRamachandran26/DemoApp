import React from "react";
export default function User(props){
    return(
        <div>
            <h2>User Information</h2>

            <label> Id: {props.id}</label>
            <label>user_id: {props.user_id}</label>
            <label> title: {props.title}</label>
            <label> due_on {props.due_on}</label>
            <label> ststus: {props.ststus}</label>
        </div>
    );
}

 