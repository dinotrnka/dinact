import React from 'react';
import PropTypes from 'prop-types';

import Button from '../components/button';
import { style } from '../../config/helpers';

const Card = (props) => {
  const newContainerStyle = style(containerStyle, {
    backgroundColor: props.color,
    borderColor: props.border,
  });

  const newCircleStyle = style(circleStyle, {
    backgroundImage: `url(${props.imageUrl})`,
    borderColor: props.border,
  });

  return (
    <Button style={newContainerStyle} onClick={props.onClick}>
      <div style={newCircleStyle} />
      <div style={titleStyle}>{props.title}</div>
      <div style={subtitleStyle}>{props.subtitle}</div>
    </Button>
  );
};

Card.propTypes = {
  color: PropTypes.string,
  border: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Card.defaultProps = {
  color: 'white',
  border: 'black',
};

const containerStyle = {
  width: 200,
  height: 300,
  borderRadius: 20,
  borderStyle: 'solid',
  borderWidth: 4,
  margin: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
};

const circleStyle = {
  width: 150,
  height: 150,
  borderRadius: 75,
  marginTop: 20,
  backgroundSize: 'cover',
  borderStyle: 'solid',
  borderWidth: 4,
};

const titleStyle = {
  marginTop: 20,
  marginLeft: 10,
  marginRight: 10,
  fontSize: 20,
  fontFamily: 'Arial',
  fontWeight: 'bold',
};

const subtitleStyle = {
  fontSize: 14,
  fontFamily: 'Arial',
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  textAlign: 'center',
};

export default Card;
