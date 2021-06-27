import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRegistered,faHome,faGripHorizontal, faUsers,faFolderPlus } from '@fortawesome/free-solid-svg-icons';

const AdminSidebar = () => {
    return (
        <div>
        <div className="sidebar  justify-content-between col-md-12 py-5 px-4 p-5 bg-info" style={{height:"100vh"}}>
                <h3 className="text-light">Admin Sidebar</h3>
        <ul className="list-unstyled">
        
               <li>
               <Link to="/Home" className="text-decoration-none">
                   <h4 className="mt-3 text-light"><FontAwesomeIcon className="icon" icon={faHome} /> Home</h4> 
                </Link>
               </li>
          
                <li>
                <Link to="/adminAdmissionList" className="text-decoration-none">
                     <h5 className="mt-3 text-light"><FontAwesomeIcon className="icon" icon={faRegistered} /> Addmission List</h5> 
                </Link>
                </li>
            
               <li>
               <Link to="/addSubject" className="text-decoration-none">
                   <h5 className="mt-3 text-light "><FontAwesomeIcon className="icon active-icon" icon={faFolderPlus} /> Add Subject</h5> 
                </Link>
               </li>
            
                <li>
                <Link to="/makeAdmin" className="text-decoration-none">
                  <h5 className="mt-3 text-light"> <FontAwesomeIcon className="icon active-icon" icon={faUsers} /> Make Admin</h5>
                 </Link>
                <Link to="/manageServices" className="text-decoration-none">
                  <h5 className="mt-3 text-light "> <FontAwesomeIcon className="icon active-icon" icon={faGripHorizontal} />  Manage Services</h5>
                 </Link>
                </li>
                
            
            
        </ul>
       
    </div>
    </div>
    );
};

export default AdminSidebar;