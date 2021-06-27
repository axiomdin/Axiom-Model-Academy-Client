import React from 'react';
import PlansPricingCard from '../PlansPricingCard/PlansPricingCard';
const PlansPricingData = [
    {
        description: 'Trial',
        price: 'Free! 30 Days',
        name: "Save $120 every year compared to the monthly plan by paying biannually."

    },
    {
        description: 'Monthly',
        price: '$89',
        name: "Save $98 every year compared to the monthly plan by paying yearly."
    },
    {
        description: 'Yearly',
        price: "$129",
        name: 'Save $120 every year compared to the monthly plan by paying biannually.',

    },
    {
        description: '4 Year',
        price: "$1129",
        name: 'Save $120 every year compared to the monthly plan by paying biannually.',

    },
]





const PlansPricing = () => {
    return (
        <div className="SubjectCard bg-success mt-5 text-center">
            <div className="text-center my-5">

                <h1 className="mt-3"> Plans & Pricing </h1>
            </div>
            <div className="container">
                
                    <div className="row">
                        {
                            PlansPricingData.map(pln => <PlansPricingCard teacher={pln}></PlansPricingCard>)
                        }
                    </div>
                
            </div>
        </div>
    );
};

export default PlansPricing;