import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import FriendListApp from '../';
import styles from '../styles.css';
import * as reducers from '../../../reducers';
import {
  addFriend,
  previousPage,
  nextPage,
  deleteFriend,
} from '../../FriendListApp/actions';

Enzyme.configure({ adapter: new Adapter() });

function setup(actions = []) {
  const props = {
    addFriend: jest.fn(),
    deleteFriend: jest.fn(),
    starFriend: jest.fn(),
    nextPage: jest.fn(),
    previousPage: jest.fn(),
    setSex: jest.fn(),
  };

  const reducer = combineReducers(reducers);
  const store = createStore(reducer);

  if (actions) {
    actions.forEach(action => store.dispatch(action));
  }

  const enzymeWrapper = mount(
    <Provider store={store}>
      <FriendListApp {...props} />
    </Provider>,
  );

  return {
    props,
    enzymeWrapper,
  };
}

describe('FriendListApp', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper, props } = setup();

    expect(enzymeWrapper.find('h1').text()).toBe('The FriendList');
    expect(enzymeWrapper.find('AddFriendInput').exists()).toBe(true);
    expect(enzymeWrapper.find('FriendList').exists()).toBe(true);
    expect(enzymeWrapper.find('Pagination').exists()).toBe(true);
  });

  it('should pass a goBack function to Pagination', () => {
    const actions = [
      addFriend('Name1'),
      addFriend('Name2'),
      addFriend('Name3'),
      addFriend('Name4'),
      nextPage(),
    ];
    const { enzymeWrapper, props } = setup(actions);
    const Pagination = enzymeWrapper.find('Pagination');

    expect(Pagination.exists()).toBe(true);
    expect(Pagination.props().goBack).toBeInstanceOf(Function);
  });

  it('should not pass a goBack function to Pagination', () => {
    const { enzymeWrapper, props } = setup();
    const Pagination = enzymeWrapper.find('Pagination');

    expect(Pagination.exists()).toBe(true);
    expect(Pagination.props().goBack).toBeFalsy();
  });

  it('should pass a goNext function to Pagination', () => {
    const actions = [
      addFriend('Name1'),
      addFriend('Name2'),
      addFriend('Name3'),
      addFriend('Name4'),
    ];
    const { enzymeWrapper, props } = setup(actions);
    const Pagination = enzymeWrapper.find('Pagination');

    expect(Pagination.exists()).toBe(true);
    expect(Pagination.props().goNext).toBeInstanceOf(Function);
  });

  it('should not pass a goNext function to Pagination', () => {
    const actions = [
      addFriend('Name1'),
      addFriend('Name2'),
      addFriend('Name3'),
      addFriend('Name4'),
      nextPage(),
      nextPage(),
      nextPage(),
    ];
    const { enzymeWrapper, props } = setup(actions);
    const Pagination = enzymeWrapper.find('Pagination');

    expect(Pagination.exists()).toBe(true);
    expect(Pagination.props().goNext).toBeFalsy();
  });

  it('should pass a goBack function and a goNext function to Pagination', () => {
    const actions = [
      addFriend('Name1'),
      addFriend('Name2'),
      addFriend('Name3'),
      addFriend('Name4'),
      nextPage(),
    ];
    const { enzymeWrapper, props } = setup(actions);
    const Pagination = enzymeWrapper.find('Pagination');

    expect(Pagination.exists()).toBe(true);
    expect(Pagination.props().goBack).toBeInstanceOf(Function);
    expect(Pagination.props().goNext).toBeInstanceOf(Function);
  });

  it('should neither pass a goBack function nor a goNext function to Pagination', () => {
    const actions = [deleteFriend(1), deleteFriend(2)];
    const { enzymeWrapper, props } = setup(actions);
    const Pagination = enzymeWrapper.find('Pagination');

    expect(Pagination.exists()).toBe(true);
    expect(Pagination.props().goBack).toBeFalsy();
    expect(Pagination.props().goNext).toBeFalsy();
  });
});
