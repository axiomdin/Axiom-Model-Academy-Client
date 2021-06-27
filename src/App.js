import { createContext, useState } from "react";
import './App.css';
import Home from './component/Home/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admission from './component/Admission/Admission/Admission';
import AdmissionList from './component/Admission/AdmissionList/AdmissionList';
import ReviewPost from './component/Admission/ReviewPost/ReviewPost';
import Admin from './component/Admin/Admin/Admin';
import AddSubject from './component/Admin/AddSubject/AddSubject';
import MakeAdmin from './component/Admin/MakeAdmin/MakeAdmin';
import ManageServices from './component/Admin/ManageServices/ManageServices';
import Login from "./component/Login/Login/Login";
import PrivateRoute from "./component/Login/PrivateRoute/PrivateRoute";
import ListStudent from "./component/Admin/ListStudent/ListStudent"



export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admission">
            <Admission></Admission>
          </PrivateRoute>
          <Route path="/admissionList">
            <AdmissionList></AdmissionList>
          </Route>
          <Route path="/review">
            <ReviewPost></ReviewPost>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/addSubject">
            <AddSubject></AddSubject>
          </PrivateRoute>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/manageServices">
            <ManageServices></ManageServices>
          </Route>
          <Route path="/adminAdmissionList">
            <ListStudent></ListStudent>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>

      </userContext.Provider>
  );
}

export default App;
