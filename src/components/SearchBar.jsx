import React, {useState} from 'react';

import "./SearchBar.css"

export const SearchBar = () => {
    const [input, setInput] = useState("");
    const [client, clientList] = useState([]);
    const queryDB = () => {
        alert(input);
    }

    return (
        <div className='input-container'>
            <input 
                placeholder="Search..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={queryDB}>
                Search
            </button>
            
        </div>

    )
}