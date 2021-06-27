import React from 'react';

const ListStudentCard = (props) => {
    const { firstName, gender, number } = props.student
    return (
        <div>
            <table class="table">
                <tbody>
                    <tr>
                        
                        <td> <h3>{firstName}</h3></td>
                        <td><h4>{number}</h4></td>
                        <td><h4>{gender}</h4></td>

                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default ListStudentCard;