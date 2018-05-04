import * as types from './types';

const INITIAL_STATE = {
  loggedIn: false,
  errorMessage: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
    case types.LOGIN_CANCEL:
      return {
        ...state,
        loggedIn: false,
        errorMessage: '',
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        errorMessage: '',
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        errorMessage: action.payload.data.error,
      };
    default:
      return state;
  }
}
