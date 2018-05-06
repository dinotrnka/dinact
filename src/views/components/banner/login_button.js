import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const LoginButton = props => (
  <Button
    bsStyle="link"
    bsSize="large"
    style={buttonStyle}
    onClick={props.onClick}
  >
    {props.title}
  </Button>
);

LoginButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const buttonStyle = {
  color: 'white',
};

export default LoginButton;
