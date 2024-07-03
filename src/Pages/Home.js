import React from "react";
import "../Pages/Home.css";
import Navbar from "../Components/Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <div className="homepage">
                <div className="backImg">
                    <h1>Home Page</h1>
                </div>
            </div>
        </>
    );
}

export default Home;
