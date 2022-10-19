import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';



const columns = [
    { field: 'user_Id', headerName: 'User_Id' },
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 900 },
]


const DataTable = () => {

    const [tableData, setTableData] = useState({})

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            //.then((data) => console.log(data))
            .then((data) => setTableData(data))
    })


    return (

        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={100}
                checkboxSelection />

        </div>

    )
}
export default DataTable