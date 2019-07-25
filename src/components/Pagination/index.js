import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.css';

class Pagination extends PureComponent {
  static props = {
    goBack: PropTypes.func,
    goNext: PropTypes.func,
  };

  renderBackButton() {
    const { goBack } = this.props;

    if (goBack) {
      return (
        <button
          type="button"
          onClick={goBack}
          className={classnames('btn', 'bnt-default')}
        >
          Back
        </button>
      );
    }

    return <div />;
  }

  renderNextButton() {
    const { goNext } = this.props;

    if (goNext) {
      return (
        <button
          type="button"
          onClick={goNext}
          className={classnames('btn', 'bnt-default')}
        >
          Next
        </button>
      );
    }

    return <div />;
  }

  render() {
    const { goBack, goNext } = this.props;

    if (!goBack && !goNext) {
      return null;
    }

    return (
      <div className={styles.root}>
        {this.renderBackButton()}
        {this.renderNextButton()}
      </div>
    );
  }
}

export default Pagination;
