import React, { useState, useContext} from 'react';
import { PaystackButton } from "react-paystack";
import CurrencyFormat from 'react-currency-format';
import { AmountContext } from '../context/AmountContext';

export default function Payment() {

    const publicKey = "pk_test_e87cbb3f8d8fdf79dc6587d7b925a9d994fbf64d";
    const [amount, setAmount] = useContext(AmountContext);
    const [toNaira, setToNaira] = useContext(AmountContext);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");


    const componentProps = {
        email,
        toNaira,
        metadata: {
        name,
        phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () => {
            setEmail('');
            setName('');
            setPhone('');
        },
        onClose: () => {
            
        },
    }

    return (
        <div className="container py-5">
            <h1>Make Payment</h1>
            <img src="data:image/png;base64,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" 
            style={{ height: 30 }} alt="Paystact"/>
            <hr />
            <h4 className="mt-3">Amount to pay: <span className="text-success">&#8358;<CurrencyFormat value={amount} displayType={'text'} thousandSeparator={true} /></span></h4>
            <div className="checkout-form col-lg-6 px-0">
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                        className="form-control"
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                        className="form-control"
                        type="text"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input
                        className="form-control"
                        type="text"
                        id="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </form>
                <PaystackButton className="btn btn-primary" {...componentProps} />
            </div>

        </div>
    )
}
