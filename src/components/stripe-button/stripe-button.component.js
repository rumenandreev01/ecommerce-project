import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IX2XDJDfqREbl0iG8ConZqBTKnvu2ySxjyWRaQtOzi3ebhhkEu03UKHJ6Ezl1XNf48rPclg1hDweji5LVlaS6o7002lahNkv1';
    
    const onToken = token => {
        console.log(token);
        alert("Success")
    }

    return (
        <StripeCheckout label="Pay Now" name="CRWN Clothing" billingAddress shippingAddress
        image="https://svgshare.com/i/CUz.svg" description={`Your total is ${price}`}
        amount={priceForStripe} panelLabel="Pay Now" token={onToken} stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;