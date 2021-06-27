import React from 'react';

const Review = (props) => {
    const { imgUrl, firstName, comment } = props.rev
    return (
    
            <div style={{marginLeft:"120px"}} className="col-md-4 mt-5 col-sm-6 text-center card">

                <div className="text-center">
                    <img style={{ height: "100px" }} className="mx-3" src={imgUrl} alt="" />

                </div>
                <div>
                    <h6 className="text-primary">{firstName}</h6>

                </div>

                <div className="card-body">
                    <p className="card-text text-center text-dark">{comment}</p>
                </div>
            </div>


    );
};

export default Review;