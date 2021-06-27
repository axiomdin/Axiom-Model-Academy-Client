import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const Admin = () => {
    return (
        <div className="row ms-3 mt-3">
            <div className="col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-9 bg-light">

            </div>
        </div>
    );
};

export default Admin;