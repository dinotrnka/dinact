import React from 'react';
import PropTypes from 'prop-types';

import { style } from '../../config/helpers';

const Button = props => (
  <span
    style={style(baseStyle, props.style)}
    role="button"
    tabIndex={0}
    onClick={props.onClick}
    onKeyUp={(e) => {
      if (e.key === 'Enter') {
        props.onClick();
      }
    }}
  >
    {props.children}
  </span>
);

Button.propTypes = {
  style: PropTypes.element,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  style: {},
  children: {},
};

const baseStyle = {
  outline: 'none',
  cursor: 'pointer',
};

export default Button;
