import React from 'react';

// import libraries
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';

// import component modules
import Header from './components/Header';
import Home from './components/Home';
import Movies from './components/Movies';
import Series from './components/Series';

const App = () => {
    return (
        <div>
            <nav style={styles.navBar}>
                <a href='http://localhost:3000/' style={{color:'#FFFFFF', fontSize:24, textDecoration:'none'}}>DEMO Streaming </a>
                <div style={{float: 'right',}}>
                    <button style={styles.loginButton} href='https://remoteroofing.com/'>Login</button>
                    <button style={styles.trialButton} href='https://remoteroofing.com/'>Start your free trial</button>
                </div>
            </nav>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/movies' component={Movies} />
                    <Route path='/series' component={Series} />
                </Switch>
            </Router>
        </div>
    );
}

const styles = {
    navBar: {
        /* Layout */
        padding: 15,
        /* Styles */
        backgroundColor: '#449FFA',
        color: '#FFFFFF',
    },

    loginButton: {
        backgroundColor: '#449FFA',
        border: 'none',
        color: '#FFFFFF',
        marginRight: 15,
    },

    trialButton: {
        backgroundColor: '#57595B',
        border: 'none',
        color: '#FFFFFF',
        padding: 5,
    },
};

export default App;
