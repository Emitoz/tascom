import React, { useState, useContext } from 'react';
import CurrencyFormat from 'react-currency-format';
import { AmountContext } from '../context/AmountContext';

export default function Item({item}) {

    const [amount, setAmount] = useContext(AmountContext);

    const [ quantity, setQuantity ] = useState(0);
    const [ itemPrice, setItemPrice ] = useState(0);

    function increment(){
        setQuantity(quantity + 1);
        setItemPrice((quantity + 1) * item.Price);
        setAmount(amount + item.Price);
    }

    function decrement(){
        if(quantity > 0){
            setQuantity(quantity - 1);
            setItemPrice(itemPrice - item.Price);
            setAmount(amount - item.Price);       
        }
    }

    return (
        <div className="meal-item mb-3">
            <div className="row" data-aos="fade-right" data-aos-duration="1000">
                <div className="col-3">
                    <img src={item.Image.name} alt={item.Name}/>
                </div>
                <div className="col-6">
                    <h4>{item.Name}</h4>
                    <p className="text-muted">Unit price: <span className="text-warning">&#8358;<CurrencyFormat value={item.Price} displayType={'text'} thousandSeparator={true} /></span></p>
                    <p>Total price: <span className="text-success">&#8358;<CurrencyFormat value={itemPrice} displayType={'text'} thousandSeparator={true} /></span></p>
                </div>
                <div className="col-3">
                    <p>Quantity</p>
                    <div className="quantity-input">
                        <button className="quantity-input__modifier quantity-input__modifier--left" onClick={decrement}>
                        &mdash;
                        </button>
                        <input className="quantity-input__screen" type="text" value={quantity} readonly />
                        <button className="quantity-input__modifier quantity-input__modifier--right" onClick={increment}>
                        &#xff0b;
                        </button>  
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
