import { React } from "react";
import Api from "../component/Api";
import Postform from "../Apipushdata/postform";
export default function Contact(){
    return(
        <div>
        <h1>Contact</h1>
        <p>This is a Contack page</p>
        <Api></Api>
       <div><Postform/></div> 

        
        </div>
    )
}