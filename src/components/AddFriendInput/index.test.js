import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer';

import AddFriendInput from './';

Enzyme.configure({ adapter: new Adapter() });

function setup(injectedProps = {}) {
  const props = {
    addFriend: jest.fn(),
    ...injectedProps,
  };

  const enzymeWrapper = shallow(<AddFriendInput {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('AddFriendInput', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper, props } = setup();

    expect(enzymeWrapper.find('input').exists()).toBe(true);
  });

  it('should match the snapshot', () => {
    const tree = renderer
      .create(<AddFriendInput addFriend={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
