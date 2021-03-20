import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';

const Header = () =>{
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/> 
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/login">Blog</Link>
                    </li>
                    <li>
                        <Link to="/login">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>

                </ul>
            </nav>
            <div className="title-container">
                <h1>PICK ME</h1>
                <h2>Better Quality for Ride</h2>
            </div>
        </div>
    );
};

export default Header;