import { useState } from "react";
import { Input } from "react-daisyui";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


function ProductFilter({ products = [] }) {
	const [searchTerm, setSearchTerm] = useState("");

	console.log("ss", searchTerm);

	const filterProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

	console.log("filterProducts", filterProducts);

	return (
		<div className="relative w-full mx-auto p-5 max-w-xs">
			<Input className="w-full max-w-xs" style={{border: '1px solid rgba(0, 0, 0, 0.3)'}} value={searchTerm} onChange={(event) => setSearchTerm(event.target.value.trim())} />
			{filterProducts.length > 0 && searchTerm.length > 0 && (
				<ul className="absolute left-5 right-5 z-30 bg-gray-200">
					{filterProducts.map((product) => {
						return (
							<li key={product.id}>
								<Link to={`/product/${product.id}`} className="block p-4 hover:bg-gray-400">
									{product.title}
								</Link>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}

ProductFilter.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      })
    ),
  };

export default ProductFilter;



