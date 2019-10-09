import React from 'react';
import './QuoteCard.css';

class QuoteCard extends React.Component {
  render() {
    return (
      <figure className="QuoteCard">
        <img src={this.props.image} alt={this.props.character} />
        <figcaption>
          <blockquote>{this.props.quote}</blockquote>
          <cite>{this.props.character}</cite>
        </figcaption>
      </figure>
    );
  }
}

export default QuoteCard;

