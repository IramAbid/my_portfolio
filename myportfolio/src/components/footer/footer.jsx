import React from 'react';
import { FaHome, FaEnvelope, FaFileAlt, FaBriefcase, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            <FaHome />
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            <FaEnvelope />
          </a>
        </li>
        <li className="nav-item">
          <a href="/resume" className="nav-link">
            <FaFileAlt />
          </a>
        </li>
        <li className="nav-item">
          <a href="/experience" className="nav-link">
            <FaBriefcase />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://github.com" className="nav-link">
            <FaGithub />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://instagram.com" className="nav-link">
            <FaInstagram />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://linkedin.com" className="nav-link">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
