import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Auth from '../../utils/auth';
import LoginModal from '../components/banner/login_modal';
import BannerHolder from '../components/banner/banner_holder';
import BannerButton from '../components/banner/banner_button';
import { login, loginCancel } from '../../state/login/actions';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { loginModalVisible: false };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.hideLoginModal();
    }
  }

  showLoginModal = () => {
    this.setState({ loginModalVisible: true });
  }

  hideLoginModal = () => {
    this.setState({ loginModalVisible: false });
  }

  render() {
    const isLoggedIn = Auth.hasAccessToken();

    return (
      <BannerHolder>
        <LoginModal
          isVisible={this.state.loginModalVisible}
          errorMessage={this.props.loginErrorMessage}
          hideLoginModal={this.hideLoginModal}
          loginAction={this.props.login}
          loginCancelAction={this.props.loginCancel}
        />
        <BannerButton title="Login" onClick={this.showLoginModal} show={!isLoggedIn} />
        <BannerButton title="Logout" onClick={() => Auth.deleteAccessToken()} show={isLoggedIn} />
      </BannerHolder>
    );
  }
}

Banner.propTypes = {
  loggedIn: PropTypes.bool,
  loginErrorMessage: PropTypes.string,
  login: PropTypes.func.isRequired,
  loginCancel: PropTypes.func.isRequired,
};

Banner.defaultProps = {
  loggedIn: false,
  loginErrorMessage: '',
};

function mapStateToProps(state) {
  return {
    loggedIn: state.login.loggedIn,
    loginErrorMessage: state.login.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login,
    loginCancel,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
