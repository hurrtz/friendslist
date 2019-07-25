import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { FriendList, AddFriendInput, Pagination } from '../../components';

import { addFriend, deleteFriend, starFriend } from './actions';
import styles from './styles.css';

class FriendListApp extends PureComponent {
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
        <Pagination />
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
