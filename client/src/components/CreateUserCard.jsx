import React from 'react';

import "./CreateUserCard.css"
import addUser from "./../img/addUser.png"

export const CreateUserCard = () => {
    return (
        <button className="create-user-container" onClick={()=>console.log("test")}>
            <img className="add-user-image" src={addUser} alt=""/>
            <h2 margin-left="40px"> Create Client</h2>
        </button>
    )
}