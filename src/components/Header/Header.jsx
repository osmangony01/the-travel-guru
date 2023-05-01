import React from 'react';

import logo from "../../../public/images/logo2.png";
import { Link } from 'react-router-dom';
import './Header.css';
import search from "../../../public/images/icons/search-icon.png";

const Header = () => {
    return (
        <nav className='nav'>
            <div>
                <Link to="/"><img className='header-logo' src={logo} alt="logo" /></Link>
            </div>
            <div>
                <ul>
                    <li className="search-field">
                        <input className='search' type="text" placeholder='search your destination...'/>
                        <span className='search-icon'><img  src={search} alt="" /></span>
                    </li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/destination">Destination</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link className='login-btn' to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;