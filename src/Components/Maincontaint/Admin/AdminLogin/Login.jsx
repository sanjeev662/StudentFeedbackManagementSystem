import React from 'react';
import { Link,Redirect,withRouter } from 'react-router-dom';
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import Axios from "axios";
import editor from "../../../Assets/Projects/codeEditor.png";
import './Login.css';

class Projects extends React.Component {
  
    loginAdmin = async(e) => {
        e.preventDefault();
        try {
          var loginRes = await Axios.post("http://localhost:5000/login",{ 
          admin: this.state.admin,
          password: this.state.password,    
        })
          .then((res)=>res.json())
          .then((data)=>{
            if(!data.success)
            {
              console.log("nahi hua");
              this.props.history.push("/login");
            }          
            else
            {
              console.log("hua");
              window.alert("logged in successfully !");
              this.props.history.push('/AdminDashboard');
            }
          })          
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
                        
                        <h2>Login Admin</h2>
                        <img src={editor} alt="Avatar" style={{ width: "22%" }} />

                        <hr></hr>

                        <Label className="">
                          Input Admin name :
                            <Input
                              type="text"
                              onChange={(e) =>
                                this.setState({
                                  admin: e.target.value
                                })
                              }
                            />
                        </Label>
        
                        <hr></hr>
        
                        <Label className="">
                          Input Password :
                            <Input
                              type="password"
                              onChange={(e) =>
                                this.setState({
                                  password: e.target.value
                                })
                              }
                            />
                        </Label>

                      <hr></hr>  
                              
                      <div className="">
                      <Link to="/AdminDashboard">
                      <Button
                            color="primary"
                            className="btn-shadow"
                            size="lg"
                            // onClick={(e) => this.loginAdmin(e)}
                          >
                            login!
                        </Button>
                        </Link>
                        </div>
        
                        </div>
                    </Form>
                    </div>
                    </div>
              </div>
            );
          }  
}
        
export default Projects;





