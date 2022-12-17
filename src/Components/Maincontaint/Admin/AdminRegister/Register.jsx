import React, { Component } from "react";
import { Link,Redirect,withRouter } from 'react-router-dom';
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import Axios from "axios";
import './Register.css';
import editor from "../../../Assets/Projects/codeEditor.png";
// import AdminDashboard from  '../AdminDashboard/AdminDashboard';

class AddStudent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Id_no:"",
      TeacherName: "",
      SubjectName: "",
      CommunicationSkill: "",
      PresentationSkill : "",
      ExplanationSkill: "",
      TopicCover:"",
      LearningSatisfaction:"",
      Total:""
    };
    this.onStudentRegister = this.onStudentRegister.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => this.setState({ show: !this.state.show });

  onStudentRegister = async(e) => {
    e.preventDefault();
    try {
      var loginRes = await Axios.post("http://localhost:5000/addteacher",{ 
      TeacherName: this.state.TeacherName,
      SubjectName: this.state.SubjectName,    
    });
       window.alert("Teacher added successfully !");
      //  this.props.history.push('../AdminDashboard/AdminDashboard');
    } catch (err) {
      window.alert(err.response.data.msg);
    }
    
  }


  render(){
    return(

    <div classname="Projects">
      <div className='p-row'>
          <div className="p-col">

            <Form>
            <div className="p-cards">
                
                <h2>Teacher Registration Form</h2>
                <img src={editor} alt="Avatar" style={{ width: "22%" }} />
                <hr></hr>

                <Label className="">
                  Input Teacher Name :
                    <Input
                      type="text"
                      onChange={(e) =>
                        this.setState({
                          TeacherName: e.target.value
                        })
                      }
                    />
                </Label>

                <hr></hr>

                <Label className="">
                  Input Subject Name :
                    <Input
                      type="text"
                      onChange={(e) =>
                        this.setState({
                          SubjectName: e.target.value
                        })
                      }
                    />
              </Label>
              <hr></hr>  
              <br></br>
              <br></br>          

              <div className="">
              <Link to="/AdminDashboard">
                  <button>Back</button>
              </Link>
              <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={(e) => this.onStudentRegister(e)}
                  >
                    Add Teacher!
                  </Button>
                </div>

                </div>
            </Form>
            </div>
            </div>
      </div>
    )
  }  
}

export default AddStudent;




