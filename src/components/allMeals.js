import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Meal from './meal';
import MealDetails from './mealDetails';

export default function AllMeals() {

    const [ meals, setMeals ] = useState([]);
    const AuthHeader = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAwMzM5NDAzLCJleHAiOjE2MDI5MzE0MDN9.bo8qGN2R-Rom5w1hoE1I4hJ3RT0ioyNrCo3FsRqhpLQ' };

    useEffect(() => {

        axios.get('http://localhost:1337/meals', { headers: AuthHeader})
            .then(res => setMeals(res.data))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container my-5">
            <h1 data-aos="fade-right" data-aos-duration="1000">All available meals</h1>
            <div className="row mt-5">
                { meals.map(meal => {
                    return (
                        <div className="col-lg-4">
                            <Link to={`/meals/${meal.id}`} style={{textDecoration: 'none'}}>
                                {<Meal meal={meal} key={MealDetails.id}/>}
                            </Link>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}
