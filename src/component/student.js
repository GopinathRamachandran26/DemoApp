import React from "react";
import {MyContext} from "./context";

export default  (student)=>{
       return(
        <MyContext.Consumer>
        
        {(context)=>{
            return(
                <div>
         <p>This is:{context.student}</p>
                </div>
                
            )
            }
             }
             </MyContext.Consumer>
    )
}