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
    const styles = {
        /* Layout */
        padding: 15,
        /* Styles */
        backgroundColor: '#449FFA',
        color: '#FFFFFF',
    };

    return (
        <div>
            <nav style={styles} class='navbar'>
                <a href='http://localhost:3000/'>DEMO Streaming </a>
                <button href='https://remoteroofing.com/'>Login</button>
                <button href='https://remoteroofing.com/'>Start your free trial</button>
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

export default App;
