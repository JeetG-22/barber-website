import React from 'react';
import "./App.css"
import { Home } from'./pages/Home';
import { AddClient } from './pages/AddClient';
import { ClientProfile } from './pages/ClientProfile';
import {Routes, Route} from "react-router-dom"

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add-client" element={<AddClient/>}/>
                <Route path="/client-profile" element={<ClientProfile/>}/>
            </Routes>


        </div>
    )
}

export default App;