import React from 'react';
import './Home.css'
import { SearchBar } from '../components/SearchBar';
import { Link } from 'react-router-dom'


export const Home = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Client Database</h1>
            <Link style={{position: 'absolute', top: '20px', right: '30px'}} to='/import-csv'>[Import]</Link>
            <div className="search-bar-container"><SearchBar/></div>
        </div>
    )
}