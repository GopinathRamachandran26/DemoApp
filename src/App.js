// import React, { Component } from 'react';
// import './index.css';
// import IncrementSample from './component/context';
// import Test from './component/test';
// import SchoolInformation from './task/schoolinformation';

// export default  function App() {
//     // constructor() {
//     //     super();
//     // }
//     // render() {
//     //     return (<div>
//     //         <h2>Increment sample</h2>
//     //         <IncrementSample>
//     //             <Test></Test>
//     //         </IncrementSample>
//     //     </div>);
//     // }
//     return(    <div>
//         <SchoolInformation></SchoolInformation>
//     </div>
//     );
        
    
// }

import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pagestask/home';
import Blogs from './pagestask/blogs';
import Contact from './pagestask/contact';
import Layout from "./pagestask/layout";
import Dog from "./pagestask/Dog";
import Nopage from "./pagestask/Nopage";
import MuiForm from "./pagestask/muiform";




function App() {
  return (

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Dog" element={<Dog />} />
          <Route path="Nopage" element={<Nopage />} />
          <Route path="muiform" element={<MuiForm/>}/>
        
        
              </Route>
      </Routes>

    </BrowserRouter>
   
 
       
     );
}

export default App;