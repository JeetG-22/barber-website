import React, {useState} from 'react';

import "./SearchBar.css"

export const SearchBar = () => {
    const [input, setInput] = useState("");

    return (
        <div className='input-container'>
            <input 
                placeholder="Search..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button>Search</button>
            <br/>
            <div>{input}</div>
            
        </div>

    )
}