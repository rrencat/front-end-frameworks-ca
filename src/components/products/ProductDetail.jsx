import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/api"; 
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Card } from "react-daisyui";
import { useCart } from '../context/CartContext'; 

function ProductDetail() {
	const [product, setProduct] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const { id } = useParams();
	const { addToCart } = useCart();

	useEffect(() => {
		async function getData(BASE_URL) {
			try {
				setIsLoading(true);
				setIsError(false);

				const response = await fetch(BASE_URL);
				const json = await response.json();
				
				console.log(json);

				setProduct(json);
			} catch (error) {
				console.log(error);
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}

		getData(`${BASE_URL}/${id}`);
	}, [id]);

	if (isLoading || !product) {
		return <div>Loading</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}

	return (
        <Card className="max-w-md mx-auto overflow-hidden md:max-w-2xl mb-4 p-8">
			<Card.Title tag="h2" className="text-black mb-2">
					<strong>{product.title}</strong>
				</Card.Title>
			<Card.Image src={product.imageUrl} alt={product.title} />
			<Card.Body>
				<p className="text-black"><i>{product.description}</i></p>
				<p>Price: <strong>{product.discountedPrice}</strong></p>
				<button
						onClick={() => addToCart(product)}
						className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mt-5">
						<ShoppingCartIcon className="h-5 w-5 mr-2" />
						Add to Cart
					</button>
			</Card.Body>
        </Card>
      );
}

export default ProductDetail;