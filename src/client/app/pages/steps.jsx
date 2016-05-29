// Libraries
import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router';

// Components
import StepBox from '../components/StepBox.jsx';

class Steps extends React.Component {
  render () {
    return (
      <Row>
        <Col md={8} mdOffset={2} className='text-center box grey top-margin'>
          <h1>Here's a list of steps to go through</h1>
          <StepBox title={'Pay (some) debts'} colorClass={'whitesmoke'}/>
          <StepBox title={'Build an Emergency Fund'} colorClass={'grey'}/>
          <StepBox title={'Contribute to your pension plan'} colorClass={'whitesmoke'}/>
          <StepBox title={'Short Term Savings'} colorClass={'grey'}/>
          <StepBox title={'Long Terms Savings'} colorClass={'whitesmoke'}/>
        </Col>
      </Row>
    );
  }
}

export default Steps;
