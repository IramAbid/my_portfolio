import React from 'react';
import './right_navbar.css'

function RightNavbar(){

    const contact_link = "https://www.hackerrank.com/profile/Irama4633";
    const about_link = "https://www.instagram.com/vivid_emarald_02/";
    const experience_link = "https://github.com/IramAbid";
    const resume_link = "https://www.linkedin.com/in/iramabid/";
    return(
        <div className='right-navbar'>
           
            <ul>
                <li><a href={experience_link}  className="link"> EXPERIENCE</a></li>
                <li><a href={contact_link}  className="link"> CONTACT</a></li>
                <li><a href={about_link}  className="link">ABOUT ME</a></li>
                <li><a href={resume_link}  className="link"> RESUME </a></li>
            </ul>
          
            
        </div>
    );
}
export default RightNavbar;