import React from 'react';
import './Home.css'
import { SearchBar } from '../components/SearchBar';


export const Home = () => {
    return (
        <>
            <h1>Client Database</h1>
            <div className="search-bar-container"><SearchBar/></div>
        </>
    )
}