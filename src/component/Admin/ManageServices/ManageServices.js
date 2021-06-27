import { useState, useEffect } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import Delete from '../Delete/Delete'


const ManageServices = () => {
    const [subject, setSubject] = useState([])
    useEffect(() => {
        fetch('https://evening-plains-79635.herokuapp.com/subject')
            .then(res => res.json())
            .then(data => setSubject(data))
    }, [])


    return (
        <div className="row ms-3 mt-3">
            <div className="col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-9 bg-light">
                <h1 className="text-dark">Manages Servicesss</h1>
                <table style={{ width: "730px" }} class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col"> <h4>Name</h4></th>
                        </tr>
                    </thead>
                </table>
                <div>
                    {
                        subject.map(sub => <Delete subject={sub}></Delete>)
                    }
                </div>


            </div>
        </div>
    );
};

export default ManageServices;