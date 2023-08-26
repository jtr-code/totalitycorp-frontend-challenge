import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useAuth0 } from "@auth0/auth0-react";

import { useCartContext } from "../../context/cartContext";

import "./Navbar.scss";

const Navbar = () => {
    const { total_items } = useCartContext();
    const [menuIcon, setMenuIcon] = useState();
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <div className={menuIcon ? "navbar active" : "navbar"}>
            <ul className='navbar-lists'>
                <li>
                    <NavLink
                        to='/'
                        className='navbar-link '
                        onClick={() => setMenuIcon(false)}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/products'
                        className='navbar-link '
                        onClick={() => setMenuIcon(false)}
                    >
                        Products
                    </NavLink>
                </li>

                {/* username display */}

                {isAuthenticated && <h3>{user.name}</h3>}

                {/* login logout */}

                {isAuthenticated ? (
                    <li>
                        <button
                            className='nav-btn'
                            onClick={() =>
                                logout({ returnTo: window.location.origin })
                            }
                        >
                            Log Out
                        </button>
                    </li>
                ) : (
                    <li>
                        <button
                            className='nav-btn'
                            onClick={() => loginWithRedirect()}
                        >
                            Log In
                        </button>
                    </li>
                )}

                <li>
                    <NavLink
                        to='/cart'
                        className='navbar-link cart-trolley--link'
                    >
                        <FiShoppingCart className='cart-trolley' />
                        <span className='cart-total--item'>{total_items}</span>
                    </NavLink>
                </li>
            </ul>

            {/* [Added] two button for open and close of menu */}

            <div className='mobile-navbar-btn'>
                <CgMenu
                    name='menu-outline'
                    className='mobile-nav-icon'
                    onClick={() => setMenuIcon(true)}
                />
                <CgClose
                    name='close-outline'
                    className='mobile-nav-icon close-outline'
                    onClick={() => setMenuIcon(false)}
                />
            </div>
        </div>
    );
};

export default Navbar;
