import React from 'react';
import './OpportunityBenefitCard.css'

const OpportunityBenefitCard = (props) => {
    const { name, image, description } = props.data;
    return (
        <section className="Card">
            <div className="text-center">

                <div className="text-center">
                    <img style={{ height: "100px" }} className="mx-3" src={image} alt="" />

                </div>
                <div>
                    <h6 className="text-primary">{name}</h6>

                </div>

                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>

            </div>
        </section>
    );
};

export default OpportunityBenefitCard;