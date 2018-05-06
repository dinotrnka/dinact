import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

import { style } from '../../../config/helpers';

const ButtonWrapper = props => (
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

ButtonWrapper.propTypes = {
  style: stylePropType,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

ButtonWrapper.defaultProps = {
  style: {},
  children: {},
};

const baseStyle = {
  outline: 'none',
  cursor: 'pointer',
};

export default ButtonWrapper;
