import React from 'react';
import { useState, useEffect } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ListStudentCard from '../ListStudentCard/ListStudentCard';

const ListStudent = () => {

    const [student, setStudent] = useState([])
    useEffect(() => {
        fetch('https://evening-plains-79635.herokuapp.com/students')
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [])



    return (
        <div className="row ms-3 mt-3">
        <div className="col-md-3">
            <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-9 bg-light">
                <h1>Admissiom List{student.length}</h1>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            
                            <th scope="col">Name</th>
                            <th scope="col">Number</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>

                </table>

                {
                    student.map(student => <ListStudentCard student={student}></ListStudentCard>)
                }
            </div>
    </div>
    );
};

export default ListStudent;