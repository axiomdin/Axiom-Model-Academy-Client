import { useContext, useState, useEffect } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import StudentList from '../StudentList/StudentList';


const AdmissionList = () => {
    const [student, setStudent] = useState([])

    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    useEffect(() => {
        fetch('https://evening-plains-79635.herokuapp.com/student?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [])

    return (
        <div className="row ms-3 mt-3">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 bg-light">
                <h1 className=" text-dark">Admissiom List{student.length}</h1>
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
                    student.map(student => <StudentList student={student}></StudentList>)
                }
            </div>
        </div>
    );
};

export default AdmissionList;