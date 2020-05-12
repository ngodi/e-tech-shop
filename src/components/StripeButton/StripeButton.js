import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = "pk_test_qvq5YrHaZGXfDWzv2Z2Ggo0O00FYXP6akY";
    
  const onToken = token => {
        alert("Payment Successful");
    }
    return (
        <StripeCheckout 
          label="Pay Now"
          name = "E-Tech Electronics"
          billingAddress
          shippingAddress
          image="./logo1.png"
          description = { `Your total is $${price}`}
          amount = {priceForStripe}
          panelLabel = "Pay Now"
          token = {onToken}
          stripeKey = {publishablekey}
        />
     
    );
}

export default StripeButton;