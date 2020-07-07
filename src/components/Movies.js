import React, { useEffect, useState } from 'react';

// import libraries
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';

// import component modules
import Header from './Header';

const Movies = () => {
    const [items, setItems] = useState([]);

    // componentWillMount
    useEffect(() => {
        fetchMovies();
    }, []);

    /**
     * Fetches the first 21 items with programType='movies' into an array
     * and sorts content alphabetically. 
     */
    const fetchMovies = async () => {
        const response = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
        const data = await response.json();
        console.log(data);
    }


    return (
        <div>
            <Header pageTitle={'Popular Movies'}/>
        </div>
    );
}

export default Movies;