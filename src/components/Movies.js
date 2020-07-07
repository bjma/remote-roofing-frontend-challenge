import React, { useEffect, useState } from 'react';

// import component modules
import Header from './Header';
import Item from './Item';

const Movies = () => {
    const [items, setItems] = useState([{
        title: '',
        imageUrl: '',
    }]);

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
        data.entries.forEach((element) => {
            if (element.programType === 'movie' && element.releaseYear >= 2010) {
                setItems(prevItems => {
                    return [{title: element.title, imageUrl: element.images['Poster Art'].url}, ...prevItems]
                })
            }
        });
    };


    return (
        <div>
            <Header pageTitle={'Popular Movies'}/>
            {console.log('movies', items[0].imageUrl)}
        </div>
    );
}

export default Movies;