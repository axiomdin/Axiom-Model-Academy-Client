import {useState} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import ProcessPayment from "../ProcessPayment/ProcessPayment"


const Admission = () => {
    const { register, handleSubmit } = useForm();

    const [registrationData , setRegistrationData] = useState(null)

    const onSubmit = data => {
        setRegistrationData(data)
    }
    
    const handlePaymentSuccess = paymentId => {
        const studentData ={
            firstName:registrationData.firstName,
            email:registrationData.email,
            number:registrationData.number,
            course:registrationData.course,
            gender:registrationData.gender,
            paymentId
                     
         };
        registrationData.created = new Date();
        fetch('https://evening-plains-79635.herokuapp.com/addStudent', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(studentData)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Your Admission Successfuly')
                }
                console.log(registrationData);
            })

    }

    return (
        <div className="row ms-3 mt-3">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 bg-light">
                <h1 className="text-dark">Admission</h1>
                <div className="mt-5" >
                    <form style={{display:registrationData ? 'none':'block'}} onSubmit={handleSubmit(onSubmit)}>
                        <input style={{ width: "600px" }} name="firstName" ref={register} placeholder="You'r Name" />
                        <br />
                        <br />
                        <input style={{ width: "600px" }} name="email" ref={register} placeholder="Email" />
                        <br />
                        <br />
                        <input style={{ width: "600px" }} name="number" ref={register} placeholder="Enter your Phone Number" />
                        <br />
                        <br />
                        <input style={{ width: "600px" }} name="course" ref={register} placeholder="Course" />
                        <br />
                        <br />
                        <select name="gender" ref={register}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                        <br />
                        <br />
                        <input type="submit" />
                    </form>
                </div>
            

            <div style={{ display: registrationData ? 'block' : 'none' }} className="col-md-5" id="payment">
                <h1 className="text-dark">Please Pay for me</h1>
                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>
        </div>
        </div>
    );
};

export default Admission;