import { useState } from 'react';
import PropTypes from 'prop-types';
import cardStyle from './Card.module.css';

const Card = ({title, content, image, tags}) => {


  return (
    <div className={cardStyle.card}>
      <figure>
        <img src={image} alt="" />
        <figcaption className={cardStyle.figcaption}>
          <h2 className={cardStyle.cardTitle}>{title}</h2>
          <p>{content}</p>
        </figcaption>
      </figure>
      <ul>
        {tags.map((tag, i) => {
          return <li key={`tag${i}`}>{tag}</li>;
        })}
      </ul>
      <button className={cardStyle.btn}>
        <h4>Leggi di più</h4>
      </button>
    </div>
  );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    published: PropTypes.string.isRequired
  };

export default Card;
