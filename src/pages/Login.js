import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    btnOff: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.inputChecker());
  };

  inputChecker = () => {
    const { email, password } = this.state;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const passMinLength = 6;

    if (emailRegex.test(email) && password.length >= passMinLength) {
      this.setState({
        btnOff: true,
      });
    } else {
      this.setState({
        btnOff: false,
      });
    }
  };

  goToWallet = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(saveEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, btnOff } = this.state;
    return (
      <form
        onSubmit={ (e) => {
          e.preventDefault();
        } }
      >
        <label
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          name="email"
          id="email"
          data-testid="email-input"
          type="email"
          placeholder="Insira um e-mail válido"
          value={ email }
          onChange={ this.handleChange }
        />
        <label
          htmlFor="password"
        >
          Senha
        </label>
        <input
          name="password"
          id="password"
          data-testid="password-input"
          type="password"
          placeholder="Insira uma senha válida"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={ !btnOff }
          onClick={ this.goToWallet }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Login.propTypes = {
  history: PropTypes.objectOf,
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Login);
