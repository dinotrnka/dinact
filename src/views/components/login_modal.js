import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const LoginModal = props => (
  <Modal show={props.show}>
    <Modal.Header closeButton onClick={props.hideLogin}>
      <Modal.Title>Login</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Login here dude!
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.hideLogin}>Close</Button>
    </Modal.Footer>
  </Modal>
);

LoginModal.propTypes = {
  show: PropTypes.bool,
  hideLogin: PropTypes.func.isRequired,
};

LoginModal.defaultProps = {
  show: false,
};

export default LoginModal;
