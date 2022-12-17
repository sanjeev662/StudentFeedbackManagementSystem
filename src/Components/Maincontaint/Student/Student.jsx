
import React, { Component } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { Link,Redirect,withRouter } from 'react-router-dom';
import Axios from "axios";
import './Student.css';

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
      var loginRes = await Axios.post("http://localhost:5000/addfeed",{ 
      TeacherName: this.state.TeacherName,
      SubjectName: this.state.SubjectName,
      CommunicationSkill: this.state.CommunicationSkill,
      PresentationSkill: this.state.PresentationSkill,
      ExplanationSkill: this.state.ExplanationSkill,
      TopicCover: this.state.TopicCover,
      LearningSatisfaction: this.state.LearningSatisfaction,
      Total:this.state.Total    
    });
      window.alert("Student feedback added");
      // this.props.history.push("/Student");
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
                
                <h2>@@ Student Feedback Form @@</h2>
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
              <br></br>
              <br></br>
              <hr></hr>            

              <Label className="">
              CommunicationSkills :
                    <Input
                      type="number"
                      onChange={(e) =>
                        this.setState({
                          CommunicationSkill: e.target.value
                        })
                      }
                    />
              </Label>

              <hr></hr>

              <Label className="">
              PresentationSkills :
                    <Input
                      type="number"
                      onChange={(e) =>
                        this.setState({
                          PresentationSkill: e.target.value
                        })
                      }
                    />
              </Label>

              <hr></hr>

              <Label className="">
              ExplanationSkills :
                    <Input
                      type="number"
                      onChange={(e) =>
                        this.setState({
                          ExplanationSkill: e.target.value
                        })
                      }
                    />
              </Label>

              <hr></hr>

              <Label className="">
              TopicCovers :
                    <Input
                      type="number"
                      onChange={(e) =>
                        this.setState({
                          TopicCover: e.target.value
                        })
                      }
                    />
              </Label>

              <hr></hr>

              <Label className="">
                LearningSatisfactions :
                    <Input
                      type="number"
                      onChange={(e) =>
                        this.setState({
                          LearningSatisfaction: e.target.value
                        })
                      }
                    />
              </Label>

              <hr></hr>
              <br></br>

              <div className="">
              <Link to="/">
                  <button>Stay Connected !</button>
              </Link>
              <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={(e) => this.onStudentRegister(e)}
                  >
                    Submit Feedback!
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




