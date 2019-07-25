import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FriendListItem from '../FriendListItem';

import styles from './styles.css';

class FriendList extends PureComponent {
  render() {
    const { friends, actions } = this.props;

    return (
      <ul className={styles.friendList}>
        {friends.map((friend, index) => {
          return (
            <FriendListItem
              key={friend.id}
              id={index}
              name={friend.name}
              starred={friend.starred}
              sex={friend.sex}
              {...actions}
            />
          );
        })}
      </ul>
    );
  }
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default FriendList;
