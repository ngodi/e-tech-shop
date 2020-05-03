import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount} from '../../redux/cart/cart.selectors';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
           {
               cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem} />)
           }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  itemCount: selectCartItemsCount
});


export default connect(mapStateToProps)(CartDropdown);