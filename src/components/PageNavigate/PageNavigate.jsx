import React from "react";
import { NavLink } from "react-router-dom";

import "./PageNavigate.scss";

const PageNavigate = ({ title }) => {
    return (
        <div className='navigate'>
            <NavLink to='/' style={{ color: "rgb(98, 84, 243)" }}>
                Home{" "}
            </NavLink>
            &nbsp;/&nbsp;{title}
        </div>
    );
};

export default PageNavigate;
