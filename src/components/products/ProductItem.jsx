import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
    const { title, description, imageUrl, id } = product;

    return (
		<div className="max-w-md mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
			<div className="p-8">
				<h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:text-gray-600 mb-4">{title}</h2>
                <img src={imageUrl} alt={title} />
				<p className="mt-2 text-gray-500">{description}</p>
				<div className="mt-4 flex justify-between items-center">
					<Link to={`product/${id}`} className="text-indigo-600 hover:text-indigo-900">
						View product
					</Link>
				</div>
			</div>
		</div>
	);
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
};