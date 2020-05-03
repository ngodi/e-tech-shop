import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick = { toggleCartHidden }>
        <img alt="shopping cart" className="cart-img" src="./cart.png" width="100%"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);