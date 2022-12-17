import React from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Maincontaint/Home/Home';

import About from './Components/Maincontaint/About/About';
import Student from './Components/Maincontaint/Student/Student'; 

import LoginAdmin from  './Components/Maincontaint/Admin/AdminLogin/Login';
import AdminDashboard from  './Components/Maincontaint/Admin/AdminDashboard/AdminDashboard';
import Register from  './Components/Maincontaint/Admin/AdminRegister/Register';
import Viewfeed from './Components/Maincontaint/Admin/Viewfeed/Viewfeed';



import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
      <div className='n-stick'><Navbar/></div>
      <div className='body-s'>

        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/student" element={<Student/>} />

          <Route path="/loginadmin" element={<LoginAdmin/>} />         
          <Route path="/AdminDashboard" element={<AdminDashboard/>} />
          <Route path="/src/Components/Maincontaint/Admin/AdminDashboard/AdminDashboard" element={<AdminDashboard/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Viewfeed/:productId" element={<Viewfeed/>} />
          
        </Routes>

      </div>
      <div className='f-stick'><Footer/></div>
      </Router>

    </div>
  );
}

export default App;


