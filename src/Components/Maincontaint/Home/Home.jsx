import React from 'react';
import './Home.css';

import homeLogo from "../../Assets/home-main.svg";
import instagram from "../../Assets/instagram.png";
import linkedin from "../../Assets/linkedin.png";
import github from "../../Assets/github.png";

import bgvideo from "../../Assets/bg-video2.mp4";


class Home extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='home'> 

            <video autoPlay muted loop id="myVideo">
                <source src={bgvideo} type="video/mp4" />
            </video>  

            <div className='content'>          
                <div className='i-left'>

                <div className='i-name'>
                    <span>Welcome!</span>
                    <span>Student Feedback System</span>
                    <span>University Institute of Engineering and Technology... Chhatrapati Shahu Ji Maharaj University, Kanpur</span>
                </div>

                {/* <button onClick={() => window.location = 'mailto:sanjeevsinghkaushik662@gmail.com'} className='button i-button'>hire me</button> */}

                <div className='i-icons'>
                    <a href='https://github.com/sanjeev662'><img src={github} alt="github" /></a>                    
                    <a href='https://www.linkedin.com/school/chhatrapati-shahu-ji-maharaj-university/'><img src={linkedin} alt="linkedin" /></a>
                    <a href='https://www.instagram.com/csjm_university/'><img src={instagram} alt="instagram" /></a>                   
                </div>

                </div>

                <div className='i-right'>
                    <img
                        src={homeLogo}
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: "400px" }}
                    />
                </div>                
            </div>
            </div>
        );
    }
}
 
export default Home;

