import { useState, useEffect } from 'react';
import Review from '../Review/Review';



const StudentReview = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://evening-plains-79635.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <section>
            <div className=" text-center mt-3 my-3 py-5">
                <h4 style={{ color: '#1cc7c1' }}>Review</h4>
                <h1 className="mt-3">''''''''''''''''''''''''''''''''''</h1>
            </div>
            <div className="container">

                <div className="row d-flex">
                    {
                        review.map(rev => <Review rev={rev}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default StudentReview;