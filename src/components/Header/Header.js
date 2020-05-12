import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser} from '../../redux/user/user.selector';

import './Header.scss';

const Header = ({ currentUser, hidden}) => (
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
              <CartIcon />
        </div>
        {
            hidden ? (
            ""
            ) : 
             <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
 currentUser: selectCurrentUser,
 hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);