import React from 'react';

import "./CreateUserCard.css"
import addUser from "./../img/addUser.png"
import { Link } from 'react-router-dom'

export const CreateUserCard = () => {
    return (
        <Link to="/add-client" className='link-button'>
            <button className="create-user-container" onClick={()=>console.log("test")}>
                <img className="add-user-image" src={addUser} alt=""/>
                <h2 margin-left="40px"> Create Client </h2>
            </button>
        </Link>
    )
}