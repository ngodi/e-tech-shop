import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount} from '../../redux/cart/cart.selectors';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
           {
               cartItems.length ? (
                cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem} />)
               ) :
               <span className="empty-message">Your cart is Empty</span>
           }
        </div>
        <CustomButton 
           onClick={ () => {history.push('/checkout');
           dispatch(toggleCartHidden());
          }}>GO TO CHECKOUT</CustomButton>

    </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  itemCount: selectCartItemsCount
});


export default withRouter(connect(mapStateToProps)(CartDropdown));