import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'post_id', headerName: 'Post_id' },
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'body', headerName: 'Body', width: 300 }
]


const GridApi = () =>  {
    
  const [tabledata, setTableData] = useState({})


    useEffect(() => {
      async function fetchData() {
        //const response = await fetch('https://gorest.co.in/public/v1/todos');
        const response = await fetch('https://gorest.co.in/public/v1/comments');
        let { data } = await response.json(response);
        setTableData(data);
      }
    fetchData();
  },[]);
       
    return (
      
         <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={tabledata}
        columns={columns}
        pageSize={100}
        checkboxSelection
      />
    </div>
    );
  
}


export default GridApi