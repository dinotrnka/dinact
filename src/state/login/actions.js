import axios from 'axios';

import * as types from './types';

function loginRequest() {
  return {
    type: types.LOGIN_REQUEST,
  };
}

function loginSuccess(response) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: response,
  };
}

function loginFailure(error) {
  return {
    type: types.LOGIN_FAILURE,
    payload: error,
  };
}

export function loginCancel() {
  return {
    type: types.LOGIN_CANCEL,
  };
}

export function login(email, password) {
  const url = 'http://localhost:3001/api/v1/users/login';
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post(url, { email, password });
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginFailure(error.response));
    }
  };
}
