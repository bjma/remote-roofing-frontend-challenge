import React from 'react';

// import libraries
import { Link } from 'react-router-dom';

// import component modules
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header pageTitle={'Popular Titles'}/>
            <Link to='/series'>Series</Link>
            <Link to='/movies'>Movies</Link>
        </div>
    );
}

export default Home;