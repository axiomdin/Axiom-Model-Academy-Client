import React from 'react';
import Certificate from '../../../Image/certificate.jpg';
import Teachericon from '../../../Image/teacherIcon.png';
import onlineClass from '../../../Image/OnlineClass.png'
import OpportunityBenefitCard from '../OpportunityBenefitCard/OpportunityBenefitCard';

const OpportunityBenefitInfo = [
    {
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
        name: 'Expert Teacher',
        image: Teachericon,
    },
    {
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
        name: 'Certificate',
        image: Certificate,

    },
    {
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
        name: 'Online Class',
        image: onlineClass,

    }


]



const OpportunityBenefit = () => {
    return (
        <section>
            <div className=" mt-3 my-3 py-5">
                <h4 style={{ color: '#1cc7c1' }}>Opportunity Benefit</h4>
                <h1 className="mt-3">From Our Opportunity Benefit</h1>
            </div>


            <div className="container">
            <div className="">
                <div className="row">
                    {
                      OpportunityBenefitInfo.map(data => <OpportunityBenefitCard data={data} ></OpportunityBenefitCard>)
                    }
                </div>
            </div>
            </div>

        </section>
    );
};

export default OpportunityBenefit;