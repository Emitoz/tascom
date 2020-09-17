import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Item from './item';
import CurrencyFormat from 'react-currency-format';
import { AmountContext } from '../context/AmountContext';

export default function MealDetails(props) {

    const [meal, setMeal] = useState({});
    const [mealItems, setMealItems] = useState([]);
    // const [priceTotal, setPriceTotal] = useState(0);

    const [amount, setAmount] = useContext(AmountContext);

    const AuthHeader = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAwMzM5NDAzLCJleHAiOjE2MDI5MzE0MDN9.bo8qGN2R-Rom5w1hoE1I4hJ3RT0ioyNrCo3FsRqhpLQ' };

    useEffect(() => {
        axios.get('http://localhost:1337/meals/' + props.match.params.id, {headers: AuthHeader})
            .then(res => {
                setMeal(res.data);
                setMealItems(res.data.items);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className="container py-5">
            <h1 data-aos="fade-right" data-aos-duration="1000">{meal.Name}</h1>
            <p className="text-muted" data-aos="fade-right" data-aos-duration="1000">{meal.Description}</p>
            <div>
            <hr />
            <h3 className="text-muted mb-3" data-aos="fade-right" data-aos-duration="1000">Meal Items</h3>
            { mealItems.map(item => {
                return (
                    <Item item={item} />
                )
            }) }
            <h3 className="text-muted my-4">Price total: <span className="text-success">&#8358;<CurrencyFormat value={amount} displayType={'text'} thousandSeparator={true} /></span></h3>
            <Link to="/payment">
                <button type="button" className="btn btn-primary">Purchase meal</button>
            </Link>
            </div>
        </div>
    )
}
