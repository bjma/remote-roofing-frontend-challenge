import React, { useEffect, useState } from 'react';

// import component modules
import Movies from './Movies';

/**
 * 
 * @param {*} props title, imageURL
 */
const Item = (props) => {
    const styles = {
        img: {
            height: 150, width: 100,
        },
    };

    return (
        <div>
            <img src={props.imageUrl} style={styles.img} />
            <p>{props.title}</p>
        </div>
    );
}

export default Item;