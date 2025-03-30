import React from "react";
import { Link } from "react-router-dom";
import "../style/Navigation.css";

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="logo">Open</div>
            <ul className="navbar-links">
                <li className="fade-in">
                    <Link to="/products">Products</Link>
                </li>
                <li className="fade-in">
                    <Link to="/solutions">Solutions</Link>
                </li>
                <li className="fade-in">
                    <Link to="/partners">Partners</Link>
                </li>
                <li className="fade-in">
                    <Link to="/company">Company</Link>
                </li>
                <li className="fade-in">
                    <Link to="/resources">Resources</Link>
                </li>
                <li className="fade-in">
                    <Link to="/pricing">Pricing</Link>
                </li>
                <div className="login-get-started">
                    <Link to="/login" className="get-started fade-in">
                        Login
                    </Link>
                    <Link to="/register" className="get-started fade-in">
                        Get Started
                    </Link>
                </div>
            </ul>
        </nav>
    );
};

export default Navigation;
