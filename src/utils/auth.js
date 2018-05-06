import { Component } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

import { ACCESS_TOKEN_KEY } from '../config/constants';

class Auth extends Component {
  static hasAccessToken() {
    return Auth.getAccessToken() !== undefined
      && Auth.getAccessToken() !== 'null';
  }

  static setAccessToken(accessToken) {
    reactLocalStorage.set(ACCESS_TOKEN_KEY, accessToken);
  }

  static getAccessToken() {
    return reactLocalStorage.get(ACCESS_TOKEN_KEY);
  }

  static deleteAccessToken() {
    return reactLocalStorage.set(ACCESS_TOKEN_KEY, null);
  }
}

export default Auth;
