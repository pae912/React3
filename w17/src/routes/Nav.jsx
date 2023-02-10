import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import styles from "../css/navbar.module.css";


const Nav = () => {
    const { navbar } = styles;
    return (
        <>
            <nav className={navbar}>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="Product">Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="About">About</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};
export default Nav;
