import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className="header">
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/posts">Posts</Link>
            <ActiveLink to="/about">About</ActiveLink>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;