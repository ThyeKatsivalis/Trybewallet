import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">{`email: ${email}`}</p>
        <p data-testid="total-field">{`total de despesa: ${0}`}</p>
        <p data-testid="header-currency-field">{`Moeda: ${'BRL'}`}</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string,
};

Header.defaultProps = {
  email: '',
};

export default connect(mapStateToProps)(Header);
