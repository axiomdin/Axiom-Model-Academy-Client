import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log("Add email")
        fetch('https://evening-plains-79635.herokuapp.com/addAdmin', {
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success =>{
            if(success){
                alert('Created Admin Successfuly')
            }
            console.log(data);
        })
    }

    return (
        <div className="row ms-3 mt-3">
            <div className="col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-9 bg-light">
                <h1 className="text-dark">Make Admin</h1>

                <div className="mt-5" >
                <form onSubmit={handleSubmit(onSubmit)}>
                        <input style={{ width: "600px" }} name="email" ref={register} placeholder="Add Email" />
                        <br />
                        <br />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;