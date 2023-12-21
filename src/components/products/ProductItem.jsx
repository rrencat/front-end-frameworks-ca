import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useCart } from '../context/CartContext'; 

export default function ProductItem({ product }) {
    const { title, description, imageUrl, id } = product;

    const { addToCart } = useCart();

    return (
		<div className="max-w-md mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
			<div className="p-8">
				<h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:text-gray-600">{title}</h2>
                <img src={imageUrl} alt={title} />
				<p className="mt-2 text-gray-500">{description}</p>
				<div className="mt-4 flex justify-between items-center">
					<Link to={`product/${id}`} className="text-indigo-600 hover:text-indigo-900">
						View more
					</Link>
					<button
						onClick={() => addToCart(product)}
						className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
					>
						<ShoppingCartIcon className="h-5 w-5 mr-2" />
						Add to Cart
					</button>
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