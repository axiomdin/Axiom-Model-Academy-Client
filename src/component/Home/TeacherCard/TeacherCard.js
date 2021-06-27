import React from 'react';

const TeacherCard = (props) => {
    const { name, image, description } = props.teacher
    return (
      
             <div className="col-md-4 col-sm-6 text-center card">

                <div className="text-center">
                    <img style={{ height: "100px" }} className="mx-3" src={image} alt="" />

                </div>
                <div>
                    <h4 className="text-primary">{name}</h4>

                </div>

                <div className="card-body">
                    <h5 className="card-text text-center">{description}</h5>
                </div>
                </div>


     
    );
};

export default TeacherCard;