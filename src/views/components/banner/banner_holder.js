import React from 'react';
import PropTypes from 'prop-types';

import { TRISS_RED } from '../../../config/colors';
import { PAGE_WIDTH } from '../../../config/constants';

const BannerHolder = props => (
  <div style={wrapperStyle}>
    <div style={containerStyle}>
      {props.children}
    </div>
  </div>
);

export default BannerHolder;

BannerHolder.propTypes = {
  children: PropTypes.node,
};

BannerHolder.defaultProps = {
  children: {},
};

const wrapperStyle = {
  backgroundColor: TRISS_RED,
  height: 50,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const containerStyle = {
  width: PAGE_WIDTH,
  display: 'flex',
  justifyContent: 'flex-end',
};