import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';

import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden }) => (
    <div className="cart-icon" onClick = { toggleCartHidden }>
        <img classname="cart-img" src="./cart.png" width="100%"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon);