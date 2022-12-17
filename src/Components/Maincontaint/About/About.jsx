import React from 'react';
import './About.css';

import aboutlogo from '../../Assets/ab.png';

class About extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='about'>

                <div className='a-left'>
                    <div className='detailss'>
                    <span>Hi Everyone, </span> 
                    <span style={{color:"grey"}}> University Institute of Engineering & Technology (UIET) </span>
                    <span>was founded in</span>
                    <span style={{color:"grey"}}> 1996 in Kanpur, India.</span>
                    <br />
                    <br />
                    It is affiliated to Chhatrapati Shahu Ji Maharaj University, Kanpur.
                    UIET has an intake of over 1500 students on roll with over six specializations of Engineering.
                    <br />
                    <br />
                    It also offers other career-oriented programs like...
                    <ul>
                        <li > BCA / MCA </li>
                        <li > M.sc </li>
                    </ul>
                    </div>
                </div>

                <div className='a-right'>
                    <img
                        src={aboutlogo}
                        alt="about pic"
                        className="img-fluid"
                        style={{ maxHeight: "350px" }}
                    />
                </div>
            </div>
        );
    }
}
 
export default About;