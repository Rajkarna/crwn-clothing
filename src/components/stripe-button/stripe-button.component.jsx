import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = 100 * price
    const publishableKey = 'pk_test_51LMosQSCfjcrdzYumgw1KSSlamyscpDU3zQ8m5fYxs9jKzU6sXCJThBTk2qigMUvLF66d0eLYk5psrA4kSWUP0Ek00fEhLlFtt'
    
    const intoken = token => {
        console.log(token);
        alert('payment is successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='RAW SHOP ltd.'
            shippingAddress
            billingAddress
            image='https:/svgshare.com/i/CUz.svg'
            description={`The total amount is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={intoken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton