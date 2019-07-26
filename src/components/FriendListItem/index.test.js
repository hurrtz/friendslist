import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer';

import FriendListItem from './';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  id: 1,
  name: 'Name1',
  starred: true,
  starFriend: () => {},
  setSex: () => {},
};

function setup(injectedProps = {}) {
  const props = {
    ...defaultProps,
    ...injectedProps,
  };

  const enzymeWrapper = shallow(<FriendListItem {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('FriendListItem', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper, props } = setup();

    expect(enzymeWrapper.find('li').exists()).toBe(true);
  });

  it('should match the snapshot', () => {
    const tree = renderer
      .create(
        <FriendListItem
          id={1}
          name="Name1"
          starred={true}
          starFriend={() => {}}
          setSex={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
