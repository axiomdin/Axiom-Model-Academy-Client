import {useState} from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './SimpoleCardForm.css'

const SimpoleCardForm = ({ handlePayment }) => {

    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }


        const cardElement = elements.getElement(CardElement);


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.id);
            console.log('[PaymentMethod]', paymentMethod);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe} className="PayBtn">
                    Pay
                 </button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>Your payment Success Fully Complete</p>
            }
        </div>
    );
};

export default SimpoleCardForm;