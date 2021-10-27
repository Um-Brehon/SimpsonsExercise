import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ simpsonsQuote }) => (
  <article className="QuoteCard">
    <img src={simpsonsQuote.image} alt={simpsonsQuote.character} />
    <div>
      <div>{simpsonsQuote.quote}</div>
      <div>{simpsonsQuote.character}</div>
    </div>
  </article>
);

export default QuoteCard;
