import React, { useEffect, useState } from 'react';

// import libraries
import { Container, Row } from 'react-bootstrap';

// import component modules
import Header from './Header';
import Item from './Item';
import Footer from './Footer'

const Series = () => {
    const [items, setItems] = useState([{
        title: '',
        imageUrl: '',
    }]);

    // Loading state; 0 for true, 1 for false, 2 for error
    const [isLoading, setLoading] = useState(0);

    // componentWillMount
    useEffect(() => {
        fetchSeries();
    }, []);

    /**
     * Fetches all items from JSON with programType = 'series' 
     * and a releaseYear >= 2010
     */
    const fetchSeries = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
            const data = await response.json();
            data.entries.forEach((element) => {
                if (element.programType === 'series' && element.releaseYear >= 2010) {
                    setItems(prevItems => {
                        return [{title: element.title, imageUrl: element.images['Poster Art'].url}, ...prevItems]
                    })
                }
            });
            setLoading(1);
        } catch (err) {
            setLoading(2);
        }
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
    };

    /**
     * Displays the first 21 items in 3 rows with 7 columns
     * Source: https://stackoverflow.com/questions/42391499/react-render-new-row-every-4th-column
     * @param {*} items 
     */
    const displayItems = (items) => {
        // Create an empty array of 3 rows, since we're rendering the first 21 items only
        const rows = [...Array(3)];
        // Map 7 items into each row
        const itemRows = rows.map((row, index) => items.slice(index * 7, index * 7 + 7));
        // Map rows as Row components
        const content = itemRows.map((row, index) => (
            <Row key={index}>
                {row.map((item) => (
                    <Item title={item.title} imageUrl={item.imageUrl} />
                ))}
            </Row>
        ));
        //console.log(rows);
        return content;
    };

    switch(isLoading) {
        case 0:
            return (
                <div>
                    <Header pageTitle={'Popular Series'}/>
                    <p>Loading...</p>
                    <Footer />
                </div>
            );
        case 1:
            return (
                <div>
                    {sortItems(items)}
                    <Header pageTitle={'Popular Series'}/>
                    <Container style={styles.contentWrapper}>
                        {displayItems(items)}
                    </Container>
                    <Footer />
                </div>
            );
        case 2:
            return (
                <div>
                    <Header pageTitle={'Popular Series'}/>
                    <p>Oops, something went wrong...</p>
                    <Footer />
                </div>
            );
    }
}

const styles = {
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'spaceAround',
        marginTop: 40,
    },
}

export default Series;