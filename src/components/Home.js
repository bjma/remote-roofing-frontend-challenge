import React from 'react';

// import libraries
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// import component modules
import Header from './Header';
import Item from './Item';
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Header pageTitle={'Popular Titles'}/>
            <Container style={styles.wrapper}>
                <Row>
                    <Col>
                        <Link to='/series'>
                            <Item title={'Popular Series'} imageUrl={'https://i.imgur.com/1t4UipG.png'} />
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/movies'>
                            <Item title={'Popular Movies'} imageUrl={'https://i.imgur.com/YyBiBUf.png'} />
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Footer pos={'absolute'}/>
        </div>
    );
}

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 40,
    }
}

export default Home;