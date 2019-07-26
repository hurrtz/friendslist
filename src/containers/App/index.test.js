import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer';

import App from './';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = mount(<App />);

  return { enzymeWrapper };
}

describe('App', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper, props } = setup();

    expect(enzymeWrapper.find('FriendListApp').exists()).toBe(true);
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
