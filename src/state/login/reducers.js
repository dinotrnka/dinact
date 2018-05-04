import * as types from './types';

const INITIAL_STATE = {
  isLoggingIn: false,
  loggedIn: false,
  errorMessage: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loggedIn: false,
        errorMessage: '',
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        loggedIn: true,
        errorMessage: '',
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        loggedIn: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}
