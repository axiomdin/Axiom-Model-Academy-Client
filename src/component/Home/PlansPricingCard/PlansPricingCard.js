import React from 'react';

const PlansPricingCard = (props) => {
    const { name, price, description } = props.teacher
    return (

        <div style={{marginLeft:"120px"}} className="col-md-4 mt-5 col-sm-6 text-center card">

            <div className="text-center bg-warning">

                <h3 className="text-dark">{description}</h3>
            </div>
            <div>
                <h1 className="text-primary ">{price}</h1>
                <p className="text-dark">{name}</p>
            </div>

            <div className="card-body">
                <button className="bg-warning">I WANT THIS PLAN</button>
            </div>
        </div>



    );
};

export default PlansPricingCard;