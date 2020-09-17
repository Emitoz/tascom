import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const MealsContext = createContext();

export const MealsProvider = (props) => {

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
        <MealsContext.Provider value={[meals, setMeals]}>
            {props.children}
        </MealsContext.Provider>
    )
}
