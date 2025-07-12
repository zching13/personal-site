import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <h2>My Portfolio **CHANGE**</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/travel">Travel</Link></li>
                <li><Link to="/photography">Photography</Link></li>
                <li><Link to="/baseball">Baseball</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;