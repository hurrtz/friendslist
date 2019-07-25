import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.css';

class AddFriendInput extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: props.name || '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    const { addFriend } = this.props;
    const name = e.target.value.trim();

    if (e.which === 13) {
      addFriend(name);
      this.setState({ name: '' });
    }
  }

  render() {
    const { name } = this.state;

    return (
      <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder="Type the name of a friend"
        value={name}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired,
};

export default AddFriendInput;
