import React, { Component, useState } from "react";
import { render } from "react-dom";
import EnrollTable from "./enrolltable";
import SchoolInformation from "./SchoolInformation";
import Student from "./student";


export default class Enrollment extends Component {
   constructor() {
    super();
    this.state = {
       name: "React",
      showHideSchool: true,
      showHidesStudent: false,
      SchoolData:{
        School:{

          name:"Aathisoft Metriculation",
          place:"Alangudi",
          phone:12323423,
          email:"sentthill@gmail.com",
          website:"https://aathisoft.com",
          address:"alangudi, pudukkottai,"
        }, 
        Student:[]
    },
  };
    this.hideComponent = this.hideComponent.bind(this);
    this.enroleStudent = this.enroleStudent.bind(this);
    this.removeStudent = this.removeStudent.bind(this);

  }
  enroleStudent(student){
    this.state.SchoolData.Student.push(student);
    this.setState({Students:this.state.SchoolData.Student});
  }
  removeStudent(){
    debugger;
     this.state.SchoolData.Student.pop();
     this.setState({Students:this.state.SchoolData.Student});
  }
  
  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideSchool":
        this.setState({ showHideSchool: !this.state.showHideSchool });
        break;
      case "showHideStudent":
        this.setState({ showHideStudent: !this.state.showHideStudent });
        break;
      default:
          break;
        
    }
  }

  render() {
    const { showHideSchool, showHideStudent } = this.state;
    return (
      <div>
        {showHideSchool && <SchoolInformation 
      name={this.state.SchoolData.School.name} 
      place={this.state.SchoolData.School.place} 
      phone={this.state.SchoolData.School.phone} 
      email={this.state.SchoolData.School.email} 
      website={this.state.SchoolData.School.website} 
      address={this.state.SchoolData.School.address} 
      />} 
        <button onClick={() => this.hideComponent("showHideStudent")}>
            Enroll Student
          </button>

        <hr/>
        {showHideStudent && <Student removeStudent={this.removeStudent} enroleStudent={this.enroleStudent} />}
        <hr/>
        
        <div>
          {/* <button onClick={() => this.hideComponent("showHideSchool")}>
            Click to hide School component
          </button> */}
          <EnrollTable students={this.state.SchoolData.Student}></EnrollTable>
        </div>
      </div>
    );
  }
}