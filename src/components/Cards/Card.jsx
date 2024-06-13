import PropTypes from 'prop-types';
import cardStyle from './Card.module.css';

const tagColors = {
  html: 'green',
  css: 'pink',
  js: 'yellow',
  php: 'blue',
};

const Card = ({ title, content, image, tags, published }) => {
  return (
    published && (
      <div className={cardStyle.card}>
        <figure>
          {image === "" ? (
            <img src="https://picsum.photos/400/200" alt="Placeholder" />
          ) : (
            <img src={image} alt={title} />
          )}
          <figcaption className={cardStyle.figcaption}>
            <h2 className={cardStyle.cardTitle}>{title}</h2>
            <p>{content}</p>
          </figcaption>
        </figure>
        <ul className={cardStyle.tags}>
        {tags.map((tag, i) => (
          <li key={`tag${i}`} style={{ color: tagColors[tag] || 'white' }}>
            {tag}
          </li>
        ))}
      </ul>
        <button className={cardStyle.btn}>
          <h4>Leggi di più</h4>
        </button>
      </div>
    )
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  published: PropTypes.bool.isRequired,
};

export default Card;
