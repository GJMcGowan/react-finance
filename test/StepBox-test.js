// Libraries
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Components
import StepBox from '../src/client/app/components/StepBox.jsx';

describe('<StepBox />', () => {
  it('should render the title it is given', () => {
    const box = shallow(<StepBox title={'some title'}/>)
    expect(box.contains(<h1>some title</h1>)).to.equal(true);
  });

  it('should render with the color class that it is given', () => {
    const box = shallow(<StepBox colorClass={'blue'}/>);
    expect(box.find('.stepBox').hasClass('blue')).to.equal(true);
  });
});
