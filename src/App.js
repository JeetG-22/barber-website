import React from 'react';
import "./App.css"
import { SearchBar } from './components/SearchBar';

const App = () => {
    return (
        <div className="App">
            <h1>Client Database</h1>
            <div className="search-bar-container">
                <SearchBar/>
            </div>

        </div>
    )
}

export default App;