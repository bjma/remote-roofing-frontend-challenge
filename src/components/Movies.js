import React, { useEffect, useState } from 'react';

// import component modules
import Header from './Header';
import Item from './Item';

const Movies = () => {
    const [items, setItems] = useState([{
        title: '',
        imageUrl: '',
    }]);

    // Loading state
    const [isLoading, setLoading] = useState(true);

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
        setLoading(false);
    };

    /**
     * Sorts all items alphabetically by title
     * @param {Object} items 
     */
    const sortItems = (items) => {
        items.sort((a, b) => {
            if (a.title[0] < b.title[0]) {
                return -1;
            }
    
            if (a.title[0] > b.title[0]) {
                return 1;
            }
            return 0;
        });
    }


    switch(isLoading) {
        case true:
            return (
                <div>
                    <Header pageTitle={'Popular Movies'}/>
                    <p>Loading...</p>
                </div>
            );
        case false:
            return (
                <div>
                    {sortItems(items)}
                    <Header pageTitle={'Popular Movies'}/>
                    <Item title={items[0].title} imageUrl={items[0].imageUrl} />
                    {console.log(items)}
                </div>
            );
    }
}

export default Movies;