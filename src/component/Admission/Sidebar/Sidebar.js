import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar  justify-content-between col-md-12 py-5 px-4 p-5 bg-info" style={{height:"100vh"}}>
            <ul className="list-unstyled">
            
                   <li>
                   <Link to="/Home" className="text-decoration-none">
                       <h4 className=" text-light">Home</h4> 
                    </Link>
                   </li>
              
                    <li>
                    <Link to="/admission" className="text-decoration-none">
                         <h5 className="mt-5 text-light">Addmission</h5> 
                    </Link>
                    </li>
                
                   <li>
                   <Link to="/admissionList" className="text-decoration-none">
                       <h5 className="mt-5 text-light">Admission List</h5> 
                    </Link>
                   </li>
                
                    <li>
                    <Link to="/review" className="text-decoration-none">
                      <h5 className="mt-5 text-light ">Review</h5>
                     </Link>
                    </li>
                
                
                
            </ul>
           
        </div>
        </div>
    );
};

export default Sidebar;