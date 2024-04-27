import React, { useState } from 'react';
import axios from 'axios';
import {ClientCard} from './ClientCard';
import { CreateUserCard } from './CreateUserCard';

import "./SearchBar.css"

export const SearchBar = () => {
    const [clientInput, setClientInput] = useState("");
    const [clientList, setClientList] = useState([]);


    const submitHandler = async e => {
        //Prevents refreshing each time button is clicked
        e.preventDefault(); 
        await axios.get("/client-search", {params: {clientSearch:clientInput}}).then((res) => {
            if(res.status === 500) {
                console.log(res.data);                   
                return;
            };
            setClientList(res.data);
        }).catch((err) => {
                console.log(err);
            });
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
                <p>Rows Returned: {clientList.length}</p>
                <CreateUserCard/>
                {clientList.map((clientInfo, key) => {
                    return <ClientCard firstName={clientInfo.first_name} lastName={clientInfo.last_name}
                            phoneNumber={clientInfo.phone_num} email={clientInfo.email_addr}/>;
                })}
            </div>
        </div>

    )
}