import React from 'react';
import './left_navbar.css';
import homelogo from '../../assets/logo.png';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import instagram from '../../assets/icons/instagram.svg';
import hackerrank from '../../assets/icons/hackerrank.svg';

function LeftNavbar() {
    const link = "./";
    const hackerrank_link = "https://www.hackerrank.com/profile/Irama4633";
    const instagram_link = "https://www.instagram.com/vivid_emarald_02/";
    const github_link = "https://github.com/IramAbid";
    const linkedin_link = "https://www.linkedin.com/in/iramabid/";

    return (
        <div className='Navbar'>
            <div className="container">
                <div className='top-menu'>
                    <a href={link} className="link">
                        <img src={homelogo} alt="Home logo" className="homelogo" />
                    </a>
                </div>
                <div className='bottom-menu'>
                    <ul>
                        <li>
                            <a href={github_link} className="link">
                                <img src={github} alt="Github" className="nav-icon" />
                            </a>
                        </li>
                        <li>
                            <a href={linkedin_link} className="link">
                                <img src={linkedin} alt="Linkedin" className="nav-icon" />
                            </a>
                        </li>
                        <li>
                            <a href={instagram_link} className="link">
                                <img src={instagram} alt="Instagram" className="nav-icon" />
                            </a>
                        </li>
                        <li>
                            <a href={hackerrank_link} className="link">
                                <img src={hackerrank} alt="Hackerrank" className="nav-icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LeftNavbar;
