import React, { createContext, useState } from 'react';

export const AmountContext = createContext();

export const AmountProvider = (props) => {

    const [amount, setAmount] = useState(0);
    const toNaira = amount * 100;

    return (
    <AmountContext.Provider value={[ amount, setAmount, toNaira ]}>
        {props.children}
    </AmountContext.Provider>
)
}
