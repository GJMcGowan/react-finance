// Libraries
import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router';

class Homepage extends React.Component {
  render () {
    return (
      <Row>
        <Col md={6} mdOffset={3} className='text-center box grey top-margin'>
          <h1>Here you can find out some things about personal finance</h1>
          <p>This site is for information only, and is a work in progress</p>
          <p>
            <Link to="https://www.reddit.com/r/ukpersonalfinance/wiki/lumpsuminvestment">
              Heavily based on the simple Reddit guide
            </Link>
          </p>
          <Button className='small-margin'>
            <Link to="/steps">Click to go to another page</Link>
          </Button>
        </Col>
      </Row>
    );
  }
}

export default Homepage;
