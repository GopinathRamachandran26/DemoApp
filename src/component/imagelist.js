import React from "react";
import Laptop from './image';

export default function Mobilelist(){
const  LaptopDetails=[
    {name:"Apple", version:"2006", price:80000, image:'/Images/Apple.jpg'},
    {name:"Lenova", version:"2010",price:50000, image:'/Images/Lenova.jpg'},
    {name:"hp",version:"2021",price:45000, image:'/Images/hp.jpg'},
]
 
var Laplist=LaptopDetails.map(t=>{

    return(
    <div><Laptop name={t.name} version={t.version} price={t.price}></Laptop>
    
        <img src={t.image} alt="rao" style={{width:150, height:150}}/>
    
    </div>)
}
)
return(<div className="App">
    {Laplist}
</div>);

}