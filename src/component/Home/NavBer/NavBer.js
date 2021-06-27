import { useState, useEffect } from 'react';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';

const NavBer = () => {


    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://evening-plains-79635.herokuapp.com/admin', {
            method: 'POSt',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))

    }, []);



    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
                <div class="container-fluid">
                    <h3 class="text-light">Axiom Model Academy</h3>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            {<div class="d-flex">
                                    <li class="nav-item">
                                        <Link class="nav-link ms-5  text-white" to="/home">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link ms-5  text-white" to="/admission">Admission</Link>
                                    </li>
                                </div>}

                            {isAdmin && <div>


                                <Link class="nav-link ms-5  text-white" to="/admin">Admin</Link>


                            </div>}

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBer;