import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase';

import './Header.scss';

const Header = ({ currentUser}) => (
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
        
            {
              currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                  SIGN OUT
                </div>
              ): (
                <Link className='option' to='/signin'>
                  SIGN IN
                </Link>
              )}
        </div>
    </div>
);

const mapStateToProps = state => ({
 currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);