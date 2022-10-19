import React from "react";
export default function Laptop(props)
{
    return(
        <div>
            <div>LaptopName:{props.LaptopName}</div>
            <div>version:{props.version}</div>
            <div>price:{props.price}</div>
            <div>image:{props.imagePath}</div>
        
            
        </div>
    )
}
