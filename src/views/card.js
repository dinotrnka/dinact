import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { style } from '../config/helpers';

class Card extends Component {
  static propTypes = {
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    border: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  };

  static defaultProps = {
    color: 'white',
    hoverColor: 'white',
    border: 'black',
  };

  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  getCardStyle(baseColor, hoverColor, borderColor) {
    const cardColor = this.state.hover ? hoverColor : baseColor;
    return style(container, {
      backgroundColor: cardColor,
      borderColor,
    });
  }

  render() {
    return (
      <div
        style={this.getCardStyle(this.props.color, this.props.hoverColor, this.props.border)}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <div style={style(circle, {
          backgroundImage: `url(${this.props.imageUrl})`,
          borderColor: this.props.border,
        })}
        />
        <div style={title}>{this.props.title}</div>
        <div style={subtitle}>{this.props.subtitle}</div>
      </div>
    );
  }
}

export default Card;

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
