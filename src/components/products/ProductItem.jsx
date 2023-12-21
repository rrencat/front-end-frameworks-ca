import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
    const { title, description, imageUrl, id } = product;

    return (
        <div>
          <h2>{title}</h2>
          <img src={imageUrl} alt={title} />
          <p>{description}</p>
          <Link to={`product/${id}`}>View More</Link>
        </div>
    )
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
};