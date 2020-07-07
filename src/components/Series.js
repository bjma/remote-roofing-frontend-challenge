import React, { useEffect, useState } from 'react';

// import component modules
import Header from './Header';
import Item from './Item';

const Series = () => {
    const [items, setItems] = useState([{
        title: '',
        imageUrl: '',
    }]);

    // Loading state
    const [isLoading, setLoading] = useState(true);

    // componentWillMount
    useEffect(() => {
        fetchSeries();
    }, []);

    /**
     * Fetches all items from JSON with programType = 'series' 
     * and a releaseYear >= 2010
     */
    const fetchSeries = async () => {
        const response = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
        const data = await response.json();
        //console.log(data.entries); 
        data.entries.forEach((element) => {
            if (element.programType === 'series' && element.releaseYear >= 2010) {
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
                    <Header pageTitle={'Popular Series'}/>
                    <p>Loading...</p>
                </div>
            );
        case false:
            return (
                <div>
                    {sortItems(items)}
                    <Header pageTitle={'Popular Series'}/>
                    <Item title={items[0].title} imageUrl={items[0].imageUrl} />
                    {console.log(items)}
                </div>
            );
    }
}

export default Series;