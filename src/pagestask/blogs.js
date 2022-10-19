 import { React } from "react";
 import Mobilelist from "../component/imagelist";

 export default function Blogs(){
     return(
         <div>
         <h1>Blogs</h1>
         <p>This is a blog page</p>
         <div>
           { <Mobilelist></Mobilelist>  }
        
         
         </div>
         </div>
         
     )
 }