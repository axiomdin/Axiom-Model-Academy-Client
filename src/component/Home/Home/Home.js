import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OpportunityBenefit from '../OpportunityBenefit/OpportunityBenefit';
import PlansPricing from '../PlansPricing/PlansPricing';
import StudentReview from '../StudentReview/StudentReview';
import Subject from '../Subject/Subject';
import Teacher from '../Teacher/Teacher';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OpportunityBenefit></OpportunityBenefit>
           <Subject></Subject>
           <Teacher></Teacher>
           <PlansPricing></PlansPricing>
           <StudentReview></StudentReview>
           <Footer></Footer>
        </div>
    );
};

export default Home;