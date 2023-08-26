import React from "react";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => {
    return (
        <>
            <main className='header'>
                <NavLink to='/'>
                    <h3 className='header-h3'>Totally Cart</h3>
                </NavLink>
                <Navbar />
            </main>
        </>
    );
};

export default Header;
