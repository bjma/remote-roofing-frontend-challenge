import React from 'react';

/**
 * 
 * @param {*} props pageTitle 
 */
const Footer = (props) => {
    const styles = {
        footer: {
            position: props.pos,
            left: 0, right: 0, bottom: 0,
            width: '100%',
            backgroundColor: '#2F2E2E', color: '#FFFFFF',
            marginTop: 50,
            padding: 15,
        },
    
        footerContent: {
    
        }
    };
    return (
        <div style={styles.footer}>
            <div style={styles.footerContent}>
               <p>Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</p>
               <p style={{color:'#838383'}}>Copyright &copy; DEMO Streaming. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;