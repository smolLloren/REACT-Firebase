import React from "react";
import "../Pages/Signup.css";
import Navbar from "../Components/Navbar";

function Signup() {
    return (
        <>
            <Navbar />
            <div className="signup-page">
                <div className="inputs-container">
                    <h1>Signup</h1>
                    <div className="inputs">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="please enter your email" />
                    </div>
                    <div className="inputs">
                        <label htmlFor="password">Email</label>
                        <input type="text" placeholder="please enter your password"/>
                    </div>
                    <button>Signup</button>
                </div>
            </div>
        </>
    );
}

export default Signup;
