import React from 'react';
import PropTypes from 'prop-types';

import Button from '../components/button';
import { style } from '../../config/helpers';

const Card = (props) => {
  const containerStyle = style(container, {
    backgroundColor: props.color,
    borderColor: props.border,
  });

  const circleStyle = style(circle, {
    backgroundImage: `url(${props.imageUrl})`,
    borderColor: props.border,
  });

  return (
    <Button style={containerStyle} onClick={props.onClick}>
      <div style={circleStyle} />
      <div style={title}>{props.title}</div>
      <div style={subtitle}>{props.subtitle}</div>
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

const container = {
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

const circle = {
  width: 150,
  height: 150,
  borderRadius: 75,
  marginTop: 20,
  backgroundSize: 'cover',
  borderStyle: 'solid',
  borderWidth: 4,
};

const title = {
  marginTop: 20,
  marginLeft: 10,
  marginRight: 10,
  fontSize: 20,
  fontFamily: 'Arial',
  fontWeight: 'bold',
};

const subtitle = {
  fontSize: 14,
  fontFamily: 'Arial',
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  textAlign: 'center',
};

export default Card;
