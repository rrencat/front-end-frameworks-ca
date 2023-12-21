import { useCart } from "../context/CartContext"; 

const CartList = () => {
	const { cart, addToCart, removeFromCart, totalItems } = useCart();

	console.log("total", typeof totalItems);

	if (totalItems === 0) {
		return (
			<div className="p-4">
				<h3 className="text-xl font-bold mb-2">Your cart is empty</h3>
			</div>
		);
	}

	return (
		<div className="p-4">
			{cart.map((item) => (
				<div key={item.id} className="mb-4 bg-gray-100 p-4 rounded">
					<h3 className="text-xl font-bold mb-2">{item.title}</h3>
					<p className="mb-2">Quantity: {item.quantity}</p>
					<p className="mb-2">
						<button onClick={() => addToCart(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Add
						</button>
					</p>
					<p>
						<button onClick={() => removeFromCart(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
							Remove
						</button>
					</p>
				</div>
			))}
		</div>
	);
};

export default CartList;