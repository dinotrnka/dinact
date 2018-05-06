import React, { Component } from 'react';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  onEnter = () => {
    this.setState({ email: '', password: '' });
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = (e) => {
    this.props.loginAction(this.state.email, this.state.password);
    e.preventDefault();
  }

  handleClose = () => {
    this.props.hideLoginModal();
    this.props.loginCancelAction();
  }

  render() {
    return (
      <Modal show={this.props.isVisible} onEnter={this.onEnter}>
        <Modal.Header closeButton onClick={this.handleClose}>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={formStyle} onSubmit={this.handleSubmit}>
            <FormGroup style={formGroupStyle} controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl autoFocus value={this.state.email} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup style={formGroupStyle} controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
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
  isVisible: PropTypes.bool,
  errorMessage: PropTypes.string,
  hideLoginModal: PropTypes.func.isRequired,
  loginAction: PropTypes.func.isRequired,
  loginCancelAction: PropTypes.func.isRequired,
};

LoginModal.defaultProps = {
  isVisible: false,
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

export default LoginModal;
