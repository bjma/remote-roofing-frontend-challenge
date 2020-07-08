import React, { useEffect, useState } from 'react';

/**
 * 
 * @param {*} props title, imageURL
 */
const Item = (props) => {
    return (
        <div style={styles.card}>
            <img src={props.imageUrl} style={styles.img} />
            <div style={styles.container}>
                <p>{props.title}</p>
            </div>
        </div>
    );
}

const styles = {
    card: {
        width: '13%',
        marginBottom: 15, marginLeft: 14,
    },
    container: {
        paddingRight: 16,
        textAlign: 'center',
    },
    img: {
        height: '80%', width: '100%',
    },
};

export default Item;