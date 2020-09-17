import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import AllMeals from './components/allMeals';

// Animate on scroll
import AOS from 'aos';
import "aos/dist/aos.css";
import MealDetails from './components/mealDetails';
import Payment from './components/payment';
import { AmountProvider } from './context/AmountContext';
AOS.init();

function App() {
  return (
    <Router>
      <AmountProvider>
        <Navbar />
        <Route path="/meals/:id" component={MealDetails} />
        <Route path="/payment" component={Payment} />
        <Route exact path="/" component={AllMeals} />
      </AmountProvider>
    </Router>
  );
}

export default App;
