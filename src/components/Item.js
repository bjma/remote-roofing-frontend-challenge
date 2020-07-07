import React, { useEffect, useState } from 'react';

// import component modules
import Movies from './Movies';

/**
 * 
 * @param {*} props title, imageURL
 */
const Item = (props) => {
    const styles = {
        card: {
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            transition: 0.3,
            borderRadius: 5,
            width: '10%',
        },
        container: {
            paddingRight: 16,
            paddingBottom: 1,
            textAlign: 'center',
        },
        img: {
            width: '100%',
        },
    };

    return (
        <div style={styles.card}>
            <img src={props.imageUrl} style={styles.img} />
            <div style={styles.container}>
                <p>{props.title}</p>
            </div>
        </div>
    );
}

export default Item;