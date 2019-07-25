import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.css';

class FriendListItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
    };

    this.showDetails = this.showDetails.bind(this);
  }

  showDetails() {
    this.setState(currentState => ({
      ...currentState,
      isHidden: !currentState.isHidden,
    }));
  }

  handleStarFriend(event) {
    const { starFriend, id } = this.props;

    event.stopPropagation();
    starFriend(id);
  }

  handleDeleteFriend(event) {
    const { deleteFriend, id } = this.props;

    event.stopPropagation();
    deleteFriend(id);
  }

  handleSetSex(event, sex) {
    const { setSex, id } = this.props;

    event.stopPropagation();
    setSex({ id, sex });
  }

  render() {
    const { name, starred, sex } = this.props;
    const { isHidden } = this.state;

    return (
      <li className={styles.friendListItem} onClick={this.showDetails}>
        <div className={styles.contentSection}>
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
              className={classnames('btn', 'btn-default', styles.btnAction)}
              onClick={event => this.handleStarFriend(event)}
            >
              <i
                className={classnames('fa', {
                  'fa-star': starred,
                  'fa-star-o': !starred,
                })}
              />
            </button>
            <button
              className={classnames('btn', 'btn-default', styles.btnAction)}
              onClick={event => this.handleDeleteFriend(event)}
            >
              <i className="fa fa-trash" />
            </button>
          </div>
        </div>

        <hr className={classnames({ [styles.isHidden]: isHidden })} />

        <div
          className={classnames(styles.contentSection, {
            [styles.isHidden]: isHidden,
          })}
        >
          <div className={classnames(styles.friendActions, styles.align)}>
            <small>Sex:</small>
            <button
              className={classnames('btn', 'btn-default', styles.btnAction, {
                [styles.selected]: sex === 'male',
              })}
              onClick={event => this.handleSetSex(event, 'male')}
            >
              <i className={classnames('fa', 'fa-mars')} />
            </button>
            <button
              className={classnames('btn', 'btn-default', styles.btnAction, {
                [styles.selected]: sex === 'female',
              })}
              onClick={event => this.handleSetSex(event, 'female')}
            >
              <i className={classnames('fa', 'fa-venus')} />
            </button>
          </div>
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
  setSex: PropTypes.func.isRequired,
};

export default FriendListItem;
