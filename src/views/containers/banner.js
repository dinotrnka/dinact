import React, { Component } from 'react';

import LoginModal from '../components/login_modal';
import BannerHolder from '../components/banner/banner_holder';
import LoginButton from '../components/banner/login_button';

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
    return (
      <BannerHolder>
        <LoginModal loginVisible={this.state.loginVisible} hideLogin={this.hideLogin} />
        <LoginButton title="Login" onClick={this.showLogin} />
      </BannerHolder>
    );
  }
}

export default Banner;
