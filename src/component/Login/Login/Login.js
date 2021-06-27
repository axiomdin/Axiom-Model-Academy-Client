import firebase from "firebase/app";
import google from '../../../Image/Group 573.png'
import './Login.css'
import "firebase/auth";

import { useHistory, useLocation } from 'react-router';
import './Login.css'

import { useContext} from "react";

import { userContext } from "../../../App";
import firebaseConfig from "./Firebase.Config/Firebase.Config";



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);;
 }else {
    firebase.app();
 }


const Login = () => {

    var provider = new firebase.auth.GoogleAuthProvider();
   const [loggedInUser,setLoggedInUser]=useContext(userContext);
   const history=useHistory();
   const location=useLocation();
   let { from } = location.state || { from: { pathname: "/" } };

   const handleGoogleSingIn =()=>{
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // console.log(result);
      const {displayName,email}=result.user;
      const singedInUser={name:displayName,email}
    setLoggedInUser(singedInUser)
    history.replace(from)
    
  }).catch((error) => {
    console.log(error);
  });
}

    return (
        <div className="login p-3"> 
       
           <button style={{ width: "300px",height:"70px" ,borderRadius: "50px" ,border: "1px solid black", }} type="submit" onClick={handleGoogleSingIn} ><img className="me-3" style={{ width: "50px",height:"50px" }} src={google} alt=""/>Google Login</button>
        </div>
    );
};

export default Login;
