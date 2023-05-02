// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  loadingCurrencies: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  if (action.type === 'GET_CURRENCIES') {
    return { ...state, currencies: action.payload };
  } if (action.type === 'LOADED_CURRENCIES') {
    return { ...state, currencies: action.payload };
  }
  return state;
};

export default wallet;
