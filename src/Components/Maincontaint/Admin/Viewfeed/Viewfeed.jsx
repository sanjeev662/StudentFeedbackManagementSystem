import React, { useState, useEffect } from "react";
import axios from "axios";
import './Viewfeed.css';
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
 
const Home = () => {
  const [users, setUser] = useState([]);
  const {productId}=useParams();
  console.log("kjhk");

 
  useEffect(() => {
    loadUsers(productId);
  }, [productId]);
 
  const loadUsers = async (productId) => {
    const result = await axios.get(`http://localhost:5000/getFeed/${productId}`);
    setUser(result.data.reverse());
  };
 
  return (
    <div className="container">
      <div className="dashboard">
        <h2>_@@_Feedback Record_@@_</h2>

        <table id="tablebodyfeed">
          <tbody>
          {users.map((user, index) => (
            <div className="bro">
              <tr>
              <th><h4>Teacher Name : {user.TeacherName}</h4></th>
              <th><h4> Subject Name : {user.SubjectName}</h4></th>
              </tr>
              <br></br>
              <div className="bro2">
             <tr>
              <th> Communication </th>
              <td> {user.CommunicationSkill} </td>
             </tr>
             <tr>
              <th> PresentationSkill </th>
              <td> {user.PresentationSkill} </td>
             </tr>
             <tr>
              <th> ExplanationSkill </th>
              <td> {user.ExplanationSkill} </td>
             </tr>
             <tr>
              <th> TopicCover </th>
              <td> {user.TopicCover} </td>
             </tr>
             <tr>
              <th> LearningSatisfaction </th>
              <td> {user.LearningSatisfaction} </td>
             </tr>
             <br></br>
             </div>
            </div>
            ))}
          </tbody>
        </table>
        <div class="logininfo">
           <h3>Back to AdminDashboard...</h3>
            <Link to="/AdminDashboard">
            <button>Back</button>
            </Link>
        </div>
        
    </div>
    </div>
  );
};
 
export default Home;
