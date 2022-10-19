
import React from "react";
import {MyContext} from "./context";

export default  (University)=>{
       return(
        <MyContext.Consumer>
        
        {(context)=>{
            return(
                <div>
                <p>This is:{context.university}</p>
                </div>
                
            )
            }
             }
             </MyContext.Consumer>
    )
}