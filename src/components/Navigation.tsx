import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();
    
    return (
        <nav>
            <h2>My Portfolio **CHANGE**</h2>
            <ul>
                <li>
                    <Link
                        to="/"
                        className={location.pathname === "/" ? "active" : ""}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className={location.pathname === "/about" ? "active" : ""}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/travel"
                        className={location.pathname === "/travel" ? "active" : ""}
                    >
                        Travel
                    </Link>
                </li>
                <li>
                    <Link
                        to="/photography"
                        className={location.pathname === "/photography" ? "active" : ""}
                    >
                        Photography
                    </Link>
                </li>
                <li>
                    <Link
                        to="/baseball"
                        className={location.pathname === "/baseball" ? "active" : ""}
                    >
                        Baseball
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className={location.pathname === "/contact" ? "active" : ""}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;