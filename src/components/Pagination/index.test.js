import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer';

import Pagination from './';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  goBack: () => {},
  goNext: () => {},
};

function setup(injectedProps = {}) {
  const props = {
    ...defaultProps,
    ...injectedProps,
  };

  const enzymeWrapper = shallow(<Pagination {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Pagination', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper, props } = setup();

    expect(enzymeWrapper.find('button').exists()).toBe(true);
  });

  it('should match the snapshot', () => {
    const tree = renderer
      .create(<Pagination goBack={() => {}} goNext={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
