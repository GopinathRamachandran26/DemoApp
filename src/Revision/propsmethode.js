import React from "react";
import  MobileDetailsForm from "../Revision/mobiledetailsform";

export default function PropsMethode(){
    const MobileList=[
        {name:"redmi",processor:"snapdragon",ram:"4gb",rom:"128"},
        {name:"samsung",processor:"snapdragon",ram:"2gb",rom:"128"},
        {name:"realme",processor:"snapdragon",ram:"4gb",rom:"62"},
        {name:"oppo",processor:"snapdragon",ram:"8gb",rom:"128"},
        ];

    var MobileDetailsList= MobileList.map(data=>{
        return(<MobileDetailsForm 
            Name={data.name} Processor={data.processor} Ram={data.ram} Rom={data.rom}></MobileDetailsForm>)
    })
    return (<div>

        {MobileDetailsList}
    </div>);




    }
