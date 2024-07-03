import React from "react";
import "../Pages/Login.css";
import Navbar from "../Components/Navbar";

function Login() {
    return (
        <>
            <Navbar />
            <div className="login-page">
                <div className="inputs-container">
                    <h1>Login</h1>
                    <div className="inputs">
                        <label htmlFor="email">Email</label>
                        <input type="email" />
                    </div>
                    <div className="inputs">
                        <label htmlFor="password">Email</label>
                        <input type="password" />
                    </div>
                    <button>Login</button>
                </div>
            </div>
        </>
    );
}

export default Login;
