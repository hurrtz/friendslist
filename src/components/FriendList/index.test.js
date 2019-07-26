import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer';

import FriendList from './';

Enzyme.configure({ adapter: new Adapter() });

function setup(injectedProps = {}) {
  const props = {
    friends: [{ name: 'Name1', starFriend: () => {}, setSex: () => {} }],
    actions: {},
    ...injectedProps,
  };

  const enzymeWrapper = shallow(<FriendList {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('FriendList', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper, props } = setup({
      friends: [{ name: 'Name1' }],
      actions: { starFriend: () => {}, setSex: () => {} },
    });

    expect(enzymeWrapper.find('ul').exists()).toBe(true);
    expect(enzymeWrapper.find('FriendListItem').exists()).toBe(true);
  });

  it('should match the snapshot', () => {
    const tree = renderer
      .create(<FriendList friends={[]} actions={{}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
