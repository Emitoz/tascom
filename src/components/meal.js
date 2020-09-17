import React from 'react';

export default function Meal({ meal }) {
    
    return (
        <div className="meal" data-aos="fade-right" data-aos-duration="1000">
            <div class="card mb-3">
            <h4 class="card-header">{meal.Name}</h4>
            <div className="img-container">
                <img src={meal.Image[0].name} alt={meal.Name} />
            </div> 
            
            
            </div>
        </div>
    )
}
