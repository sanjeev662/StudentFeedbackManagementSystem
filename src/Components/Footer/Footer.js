import React from 'react';
import './Footer.css';

import {
    SiLinkedin,
    SiTwitter,
    SiInstagram,
    SiYoutube,
  } from "react-icons/si";

class Footer extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className='footer'>
                <div className='col'>
                <h3>Designed and Developed by Sanjeev Singh</h3>
                </div>
                <div className='col'>
                <h3 className='f-footer'>Copyright © 2022 SS</h3>
                </div>
                <div className='col'>
                <div className='f-icons'>
                    <a href='https://twitter.com/CSJM_University' className='f-each-icons'><SiTwitter /></a>  
                    <a href='https://www.youtube.com/channel/UCXmhWnOP5IPSR59bdSLglyA' className='f-each-icons'><SiYoutube /></a>                  
                    <a href='https://www.linkedin.com/school/chhatrapati-shahu-ji-maharaj-university/' className='f-each-icons'><SiLinkedin /></a>
                    <a href='https://www.instagram.com/csjm_university/' className='f-each-icons'><SiInstagram /></a>                   
                </div>
                </div>
            </div>
        );
    }
}
 
export default Footer;