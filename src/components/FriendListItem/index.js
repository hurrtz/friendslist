import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.css';

class FriendListItem extends PureComponent {
  render() {
    const { name, starFriend, starred, id, deleteFriend } = this.props;

    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div>
            <span>{name}</span>
          </div>
          <div>
            <small>xx friends in common</small>
          </div>
        </div>
        <div className={styles.friendActions}>
          <button
            className={`btn btn-default ${styles.btnAction}`}
            onClick={() => starFriend(id)}
          >
            <i
              className={classnames('fa', {
                'fa-star': starred,
                'fa-star-o': !starred,
              })}
            />
          </button>
          <button
            className={`btn btn-default ${styles.btnAction}`}
            onClick={() => deleteFriend(id)}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starFriend: PropTypes.func.isRequired,
};

export default FriendListItem;
