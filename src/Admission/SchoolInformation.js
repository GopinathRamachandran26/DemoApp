import React from "react";

export default function SchoolInformation(props) {
  return (
    <div>

      <h2>School Details</h2>
      <div>
        <form>
          <div>
            <label>
              SchoolName:
            </label>
            <input type="text" name="Schoolname" value={props.name} />
          </div>

          <div>
            <label>
              Address:
            </label>
            <input type="text" name="Address" value={props.address} />
          </div>

          <div>
            <label>
              PhoneNumber:
            </label>
            <input type="text" name="PhoneNumber" value={props.phone} />
          </div>

          <div>
            <label>
              Email:
            </label>
            <input type="text" name="Email" value={props.email} />
          </div>
          <div>
            <label>
              Website:
            </label>
            <a href={props.website}>
              {props.website}
            </a>


          </div>


        </form>



      </div>

    </div>
  )
}