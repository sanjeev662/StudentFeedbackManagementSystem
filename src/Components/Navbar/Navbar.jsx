import React from 'react';
import './Navbar.css';
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='n-wrapper'>
                <div className='n-left'>
                    <div className='n-name'>
                        <Link to="/">UIET</Link>
                    </div>
                </div>
                <div className='n-right'>
                    <div className='n-list'>
                    <Link to="/loginadmin">Admin</Link>
                    <Link to="/student">Student</Link>                    
                    <Link to="/about">About Institute</Link>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Navbar;