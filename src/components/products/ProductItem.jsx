import PropTypes from 'prop-types';

export default function ProductItem({ product }) {
    const { title, description, imageUrl } = product;

    return (
        <div>
          <h2>{title}</h2>
          <img src={imageUrl} alt={title} />
          <p>{description}</p>
        </div>
    )
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,
};