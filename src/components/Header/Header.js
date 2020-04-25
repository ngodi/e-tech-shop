import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img alt="E-TECH" src="./logo.png" width="90%"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop" >
                   SHOP
            </Link>
            <Link className="option" to="/shop" >
                   CONTACT
            </Link>
            <Link className="option" to="/signin" >
                   SIGNIN
            </Link>
        </div>
    </div>
)

export default Header;