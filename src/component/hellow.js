import React from "react";
import {MyContext} from "./context";

export default  (Hello)=>{
       return(
        <MyContext.Consumer>
        
        {(context)=>{
            return(
                <div>
                <p>This is:{context.Hello}</p>
                </div>
                
            )
            }
             }
             </MyContext.Consumer>
    )
}