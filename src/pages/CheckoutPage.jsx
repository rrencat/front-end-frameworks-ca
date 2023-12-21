import CartList from "../components/cart/CartList";

export default function CheckoutPage() {
    return (
		<div className=" mx-auto max-w-2xl">
			<h1 className="text-3xl my-4 font-bold leading-tight text-gray-900">Cart</h1>
			<CartList />
		</div>
	);
}