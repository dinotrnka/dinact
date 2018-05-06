import React, { Component } from 'react';

import Auth from '../../utils/auth';
import LoginModal from '../components/banner/login_modal';
import BannerHolder from '../components/banner/banner_holder';
import BannerButton from '../components/banner/banner_button';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { loginVisible: false };

    this.showLogin = this.showLogin.bind(this);
    this.hideLogin = this.hideLogin.bind(this);
  }

  showLogin() {
    this.setState({ loginVisible: true });
  }

  hideLogin() {
    this.setState({ loginVisible: false });
  }

  render() {
    const isLoggedIn = Auth.hasAccessToken();

    return (
      <BannerHolder>
        <LoginModal loginVisible={this.state.loginVisible} hideLogin={this.hideLogin} />
        <BannerButton title="Login" onClick={this.showLogin} show={!isLoggedIn} />
        <BannerButton title="Logout" onClick={() => Auth.deleteAccessToken()} show={isLoggedIn} />
      </BannerHolder>
    );
  }
}

export default Banner;
