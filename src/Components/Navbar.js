import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/home">
                <h1>Anuj</h1>
            </Link>
            <ul className="navbar-items">
                <Link to="/login">
                    <li>Login</li>
                </Link>
                <Link to="/signup">
                    <li>Signup</li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;
