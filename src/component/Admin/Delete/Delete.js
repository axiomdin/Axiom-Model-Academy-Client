import React from 'react';
import deletebtn from '../../../Image/Group 33150.png'

const Delete = (props) => {

    const handledelete = (id) => {
        console.log(id)
        fetch(`https://evening-plains-79635.herokuapp.com/deleteSubject/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    const { subject, _id } = props.subject
    return (
        <div>
            <table class="table table-warning">

                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td style={{ width: "600px" }}> <h3>{subject}</h3></td>
                        <button onClick={() => handledelete(_id)} > <img style={{width:"40px"}} src={deletebtn} alt=""/></button>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Delete;