import React from "react";
import { Link } from 'react-router-dom';

//import { useAuth } from "../contexts/FirebaseAuth"
//import { useAuth } from "../contexts/FirebaseAuth"


import { AreaHeader } from './Heder/styled';

function Heder() {
    //const { currentUser } = useAuth()

    return (
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    <nav>
                        <li><Link to='/'>Filmoteca</Link>
                        </li>
                    </nav>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link> </li>
                        <li><Link to="/Category">Generos</Link> </li>
                        <li><Link to="/genres/Crime">Favoritos</Link></li>
                        <li><Link to="/Login">Login</Link> </li>
                     </ul>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Heder;