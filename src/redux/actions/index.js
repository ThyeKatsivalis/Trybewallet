export const EMAIL_LOGIN = 'EMAIL_LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const saveEmail = (email) => ({
  type: EMAIL_LOGIN,
  payload: email,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  payload: currencies,
});

export const loadCurrencies = () => ({
  type: 'LOADED_CURRENCIES',
  payload: true,
});

export const fetchCurrencies = () => async (dispatch) => {
  const fetched = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await fetched.json();
  const arrResponse = new Set(Object.keys(response));
  arrResponse.delete('USDT');
  dispatch(getCurrencies([...arrResponse]));
};
