import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './style.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark"
        ><div className="container">
                <Link className="navbar-brand" to="/"><img src="/assets/wb_logo.png" alt="LOGO" /></Link>
                <NavLink className="nav-item nav-link" to="/">SPORTBOOK</NavLink>
                <NavLink className="nav-item nav-link" to="/">CASINO</NavLink>
                <NavLink className="nav-item nav-link" to="/">PROMOTIONS</NavLink>
                <NavLink className="nav-item nav-link " to="/">
                    <div className="block margin-top-bottom-0">
                        <p>CALL TALL FREE</p>
                        <p>1-800-123-4567</p>
                    </div>

                </NavLink>
                <NavLink className="nav-item nav-link" to="/"><img src="/assets/chat-icon.png" alt="CHAT" /></NavLink>
                <NavLink className="nav-item nav-link" to="/">SIGN UP</NavLink>
                <NavLink className="nav-item nav-link" to="/">LOGIN</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;