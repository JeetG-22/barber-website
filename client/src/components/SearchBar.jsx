import React, { useState } from 'react';
import axios from 'axios';
import {ClientCard} from './ClientCard';
import { CreateUserCard } from './CreateUserCard';

import "./SearchBar.css"

export const SearchBar = () => {
    const [clientInput, setClientInput] = useState("");
    const [clientList, setClientList] = useState([]);


    const submitHandler = e => {
        //Prevents refreshing each time button is clicked
        e.preventDefault(); 
        try{
            axios.get("http://localhost:8800/client-search", {params: {clientSearch:clientInput}}).then((response) => {
                console.log(response.data);
                setClientList(response.data);
            });

        } catch(err){
            console.log(err);
        }
        
    }

    return (
        <div className="search-bar">
            <div className="input-container">
                <input
                    placeholder="Search..."
                    value={clientInput}
                    onChange={(e) => setClientInput(e.target.value)}
                />
                <button onClick={submitHandler}> Search </button>
            </div>
            <div className="search-results">
                <CreateUserCard/>
                {clientList.map((clientInfo, key) => {
                    return <ClientCard firstName={clientInfo.firstName} lastName={clientInfo.lastName}
                            phoneNumber={clientInfo.phoneNumber} email={clientInfo.email}/>;
                })}
            </div>
        </div>

    )
}