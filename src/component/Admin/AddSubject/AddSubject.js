import { useState }from 'react';
import axios from 'axios';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import upimage from '../../../Image/cloud-upload-outline 1.png'
import { useForm } from "react-hook-form";

const AddSubject = () => {
    const { register, handleSubmit } = useForm();
    const [imgUrl , setImgUrl] = useState(null)


    const onSubmit = data => {
            const studentData ={
               subject:data.subject,
               content:data.content,
               price:data.price,
               imgUrl:imgUrl
               
            };
            const url = `https://evening-plains-79635.herokuapp.com/addSubject`;
            console.log(data)    
            fetch(url,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(studentData)
            })
                .then(res => console.log('server side ser', res))
       };

const handleImageUpload =  event =>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'a74cc74461c75e4d1096a74a2468333e');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
    imageData  )
      .then(function (response) {
        setImgUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

}


    return (
        <div className="row ms-3 mt-3">
            <div className="col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-9 bg-light">
                <h1 className="text-dark">Add Subject</h1>

                <div className="mt-5" >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input style={{ width: "600px" }} name="subject" ref={register} placeholder="Subject" />
                        <br />
                        <br />
                        <input style={{ width: "600px" }} name="price" ref={register} placeholder="Corse Fee" />
                        <br />
                        <br />
                        <input style={{ width: "600px", height:"70px" }} name="content" ref={register} placeholder="Content" />
                        <br />
                        <br />
                        
                        
                        <div style={{ border: "1px solid black", width: "250px", borderRadius: "10px" }} className=" d-flex">
                            <img style={{ width: "30px" }} src={upimage} alt="" />
                            <input style={{ height: "30px", borderRadius: "10px", width: "300px" }} type="file" onChange={handleImageUpload}/>
                        </div>
                        <br />
                        <br />


                        <input type="submit" />
                    </form>

                </div>

            </div>
        </div>
    );
};

export default AddSubject;