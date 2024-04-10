import React from 'react';
import "./App.css"
import { SearchBar } from './components/SearchBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
    return (
        <div className="App">
            <h1>Client Database</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div className="search-bar-container"><SearchBar/></div>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App;