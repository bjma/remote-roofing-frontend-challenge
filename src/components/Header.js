import React from 'react';
import '../assets/Header.css';

/**
 * 
 * @param {*} props pageTitle 
 */
const Header = (props) => {
    const styles = {
        /* Layout */
        padding: 15,
        /* Styles */
        backgroundColor: '#57595B',
        color: '#FFFFFF',
    };
    
    return <div style={styles}>{props.pageTitle}</div>;
}

export default Header;