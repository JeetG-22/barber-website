import React from 'react';
import "./ClientCard.css"

export const ClientCard = ({firstName, lastName, phoneNumber, email}) => {
    return (
    <button className="client-container">
        <h3>Name: {firstName + " " + lastName}</h3>
        <h3>Phone Number: {phoneNumber}</h3>
        <h3>Email: {email}</h3>
    </button>
    )
}


