import { useState } from "react";
import EnrollTable from "./enrolltable";
export default function Inputsdata(props) {

    var StudentDetailList = props.inputs.map(data => {
        return (<EnrollTable

            studentname={data.studentname}
            fathername={data.fathername}
            mothername={data.mothername}
            address={data.address}>
        </EnrollTable>
        );
    })
    return (<div>
        {StudentDetailList}
    </div>);

}