import React from 'react';

// import libraries
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// import component modules
import Header from './Header';
import Item from './Item';

const Home = () => {
    return (
        <div>
            <Header pageTitle={'Popular Titles'}/>
            <Container style={styles.wrapper}>
                <Row>
                    <Col>
                        <Link to='/series'>
                            <Item title={'Popular Series'} />
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/movies'>
                            <Item title={'Popular Movies'} />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
    }
}

export default Home;