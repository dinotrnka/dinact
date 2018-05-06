import React, { Component } from 'react';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login, loginCancel } from '../../state/login/actions';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'dinaga@gmail.com',
      password: '',
    };
  }

  onEnter = () => {
    this.setState({ email: '', password: '' });
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = (e) => {
    this.props.login(this.state.email, this.state.password);
    e.preventDefault();
  }

  handleClose = () => {
    this.props.hideLogin();
    this.props.loginCancel();
  }

  render() {
    return (
      <Modal show={this.props.loginVisible} onEnter={this.onEnter}>
        <Modal.Header closeButton onClick={this.handleClose}>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={formStyle} onSubmit={this.handleSubmit}>
            <FormGroup style={formGroupStyle} controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup style={formGroupStyle} controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <div style={errorHolderStyle}>{this.props.errorMessage}</div>
            <Button bsSize="large" type="submit" style={loginButtonStyle}>Login</Button>
            <div>Dont have an account? <a href="/">Sign up</a> now!</div>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

LoginModal.propTypes = {
  loginVisible: PropTypes.bool,
  errorMessage: PropTypes.string,
  hideLogin: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  loginCancel: PropTypes.func.isRequired,
};

LoginModal.defaultProps = {
  loginVisible: false,
  errorMessage: '',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const formGroupStyle = {
  width: '100%',
};

const errorHolderStyle = {
  color: 'red',
  fontWeight: 'bold',
};

const loginButtonStyle = {
  margin: 20,
  width: 100,
};

function mapStateToProps(state) {
  return {
    loggedIn: state.login.loggedIn,
    errorMessage: state.login.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login,
    loginCancel,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
