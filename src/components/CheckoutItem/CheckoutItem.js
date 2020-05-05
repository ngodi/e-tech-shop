import React from 'react';

import './CheckoutItem.scss';

const CheckoutItem = ({cartItem: { name, imageUrl, price, quantity }}) => (
  <div className='checkout-item'>
      <div className='image-conatiner'>
          <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <span className='remove-button'>&#10005;</span>
  </div>
)

export default CheckoutItem;