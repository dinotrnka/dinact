import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const BannerButton = (props) => {
  if (!props.show) return null;

  return (
    <Button
      bsStyle="link"
      bsSize="large"
      style={buttonStyle}
      onClick={props.onClick}
    >
      {props.title}
    </Button>
  );
};

BannerButton.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

BannerButton.defaultProps = {
  show: true,
};

const buttonStyle = {
  color: 'white',
};

export default BannerButton;
