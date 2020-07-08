import React from 'react';
import '../assets/Header.css';

/**
 * 
 * @param {*} props pageTitle 
 */
const Header = (props) => {
    return <div style={styles}>{props.pageTitle}</div>;
}

const styles = {
    /* Layout */
    padding: 15,
    /* Styles */
    backgroundColor: '#57595B',
    color: '#FFFFFF',
};

export default Header;