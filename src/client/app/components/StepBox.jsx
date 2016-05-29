// Libraries
import React from 'react';
import {Row, Col} from 'react-bootstrap';

class StepBox extends React.Component {
  // TODO: Proptypes isn't working for some reason, need to rework.

  render () {
    return (
      <Row>
        <Col
          md={8}
          mdOffset={2}
          className={`text-center box stepBox ${this.props.colorClass}`}>
          <h1>{this.props.title}</h1>
        </Col>
      </Row>
    );
  }
}

export default StepBox;
