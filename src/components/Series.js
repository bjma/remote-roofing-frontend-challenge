import React, { useEffect, useState } from 'react';

// import component modules
import Header from './Header';
import Item from './Item';

const Series = () => {
    const [items, setItems] = useState([{
        title: '',
        imageUrl: '',
    }]);

    // componentWillMount
    useEffect(() => {
        fetchSeries();
    }, []);

    /**
     * Fetches the first 21 items with programType='series' into an array
     * and sorts content alphabetically. 
     */
    const fetchSeries = async () => {
        const response = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
        const data = await response.json();
        console.log(data.entries); 
        data.entries.forEach((element) => {
            if (element.programType === 'series' && element.releaseYear >= 2010) {
                setItems(prevItems => {
                    return [{title: element.title, imageUrl: element.images['Poster Art'].url}, ...prevItems]
                })
            }
        });
    }

    return (
        <div>
            <Header pageTitle={'Popular Series'}/>
            <Item title={items[0].title} imageUrl={items[0].imageUrl} />
            
        </div>
    );
}

export default Series;