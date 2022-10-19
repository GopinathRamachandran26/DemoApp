 import { React } from "react";
 //import Api from "../component/Api";
 import DataTable from "../taskpostapi/datatable";
 
 export default function Dog(){
     return(
         <div>
         <h1>Dog</h1>
         <p>This is a Dog</p>
         <div>
            {/* <Api/>*/}
            <DataTable/>
             
         </div>
         </div>
     )
 }