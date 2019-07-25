import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FriendList, AddFriendInput } from '../../components';

import { addFriend, deleteFriend, starFriend } from './actions';
import styles from './styles.css';

class FriendListApp extends Component {
  render() {
    const {
      friendlist: { friendsById },
      addFriend,
      deleteFriend,
      starFriend,
    } = this.props;

    const actions = {
      addFriend,
      deleteFriend,
      starFriend,
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsById} actions={actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  {
    addFriend,
    deleteFriend,
    starFriend,
  },
)(FriendListApp);
