import React from 'react';
import { Link } from 'react-router-dom';
import './SubjectCard.css'

const SubjectCard = (props) => {
    const { subject, imgUrl, content,price } = props.Subject

    return (
        <div style={{marginLeft:"120px"}} className="col-md-4 mt-5 col-sm-6 text-center card">
                <div className="text-center">
                    <img style={{ height: "100px" }} className="mx-3" src={imgUrl} alt="" />

                </div>
                <div>
                    <h6 className="text-primary text-center">{subject}</h6>
                </div>
                <div>
                    <h4 className="mt-3 text-dark text-center">Price: {price}</h4>
                </div>
                <div className="card-body">
                    <p className="card-text text-center text-dark">{content}</p>
                </div>

            <Link to="/admission"><button className="enrollBtn ">Enroll Now</button></Link>    
           
       </div>
    );
};

export default SubjectCard;