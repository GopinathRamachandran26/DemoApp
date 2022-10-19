import React  from "react";

export default function EnrollTable(props){

    return(
        <div className="App">
        <table>
          {
          props.students.map(student=>(



            
          <tr>
            <th>Name:<input type='text' value={student.studentname}/></th>
            <th>Fathername:<input type='text' value={student.fathername}/></th>
            <th>Mothername:<input type='text' value={student.mothername}/></th>
            <th>Address:<input type='text' value={student.address}/></th>
            <th>DOB:<input type='text' value={student.dob}/></th>
          </tr>

          ))
          }
          </table></div>
    );

}