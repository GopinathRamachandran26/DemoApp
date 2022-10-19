import React from "react";

export default function MobileDetailsForm(props){

    return(
        <div>
            <label>Name:</label><input type='text' value={props.Name}/>

            <div>
            <label>processor:</label><input type='text' value={props.Processor}/>
        </div>
        <div>
            <label>Ram:</label><input type='text' value={props.Ram}/>
        </div>
        <div>
            <label>Rom:</label><input type='text' value={props.Rom}/>
        </div>
        </div>
    )
}