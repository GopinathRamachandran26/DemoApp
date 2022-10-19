import React from "react";
import {MyContext} from "./context";

export default  (Collage)=>{
       return(
        <MyContext.Consumer>
        
        {(context)=>{
            return(
                <div>
                <p>This is:{context.Collage}</p>
                </div>
                
            )
            }
             }
             </MyContext.Consumer>
    )
}