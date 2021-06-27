import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpoleCardForm from '../SimpoleCardForm/SimpoleCardForm';

const stripePromise = loadStripe('pk_test_51IeEBMCYVnB3IGKwfTx9JptJdfSHIvM46ehxZyQVVZn4k0K02sDLAedfY8KVCsIkjSQGyk7RNP50K4iHorVrqvVx00mH4eIsep');

const ProcessPayment = ({handlePayment}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
            <SimpoleCardForm handlePayment={handlePayment}></SimpoleCardForm>
       </Elements>
        </div>
    );
};

export default ProcessPayment;