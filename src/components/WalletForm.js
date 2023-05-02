import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        WalletForm
        <label htmlFor="valor-da-despesa">
          Valor da despesa:
        </label>
        <input data-testid="value-input" type="text" name="value" value={ value } />
        <label htmlFor="valor-da-despesa">
          Descrição das despesas:
        </label>
        <input data-testid="description-input" type="text" value={ description } />
        <label htmlFor="moeda">Moeda</label>
        <select data-testid="currency-input" value={ currency }>
          { currencies.map((coin, index) => (
            <option key={ index }>{ coin }</option>
          )) }
        </select>
        <label htmlFor="method">Método de Pagamento:</label>
        <select
          data-testid="method-input"
          value={ method }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crébito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <label htmlFor="tag">
          Categoria
        </label>
        <select data-testid="tag-input" value={ tag } onChange={ this.handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
          <option value="Lazer">Lazer</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
