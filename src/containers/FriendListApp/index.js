import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { FriendList, AddFriendInput, Pagination } from '../../components';

import { getFriends, hasNextFriends, hasPreviousFriends } from './selectors';

import {
  addFriend,
  deleteFriend,
  starFriend,
  nextPage,
  previousPage,
} from './actions';
import styles from './styles.css';

class FriendListApp extends PureComponent {
  render() {
    const {
      friends,
      addFriend,
      deleteFriend,
      starFriend,
      nextPage,
      previousPage,
      hasNext,
      hasPrevious,
    } = this.props;

    const friendsListActions = {
      addFriend,
      deleteFriend,
      starFriend,
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={addFriend} />
        <FriendList friends={friends} actions={friendsListActions} />
        <Pagination
          goNext={hasNext && nextPage}
          goBack={hasPrevious && previousPage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: getFriends(state),
  hasNext: hasNextFriends(state),
  hasPrevious: hasPreviousFriends(state),
});

export default connect(
  mapStateToProps,
  {
    addFriend,
    deleteFriend,
    starFriend,
    nextPage,
    previousPage,
  },
)(FriendListApp);
