import React, { useState, useEffect } from "react";
import axios from "axios";
import './AdminDashboard.css';

import { Link } from "react-router-dom";
 
const Home = () => {
  const [users, setUser] = useState([]);
 
  useEffect(() => {
    loadUsers();
  }, []);
 
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/getFeed");
    setUser(result.data.reverse());   
  };

  const deleteUser = async (productId) =>
  {
    await axios.delete(`http://localhost:5000/delete/${productId}`)
    .then((result)=>{
      loadUsers();
      window.alert("Record removed successfully !");
    })
    .catch(()=>{
      alert('Error in the Code');
    });
  };
 
  return (
    <div className="container">
      <div className="dashboard">
        <h3>Feedback Records</h3>

        <table id="tablebody">
          <thead>
            <tr>
              <th> Serial No </th>
              <th> Teacher Name </th>
              <th> Subject Name </th>
              <th> View </th>
              <th> Remove </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.Id_no}>
                <td> {index + 1} </td>
                <td> {user.TeacherName} </td>
                <td> {user.SubjectName} </td>
                <td>
                <Link to={`/Viewfeed/${user.Id_no}`}>
                    <button>View</button>
               </Link>
                </td>
                <td>
                  <button class="" onClick={() => deleteUser(user.Id_no)}>
                  Remove 
                  </button>
                </td>
              </tr>
             ))}
          </tbody>
        </table>
        <div class="logininfo">
           <h3>click here to add teacher...</h3>
            <Link to="/Register">
            <button>Add</button>
            </Link>
        </div>
        
    </div>
    </div>
  );
};
 
export default Home;
