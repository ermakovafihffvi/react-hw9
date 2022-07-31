import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <ul className="list">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/profile"}>Profile</NavLink>
        </ul>
    );
};

export default Home;