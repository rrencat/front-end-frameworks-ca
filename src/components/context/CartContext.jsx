import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useLocalStorage } from "../hooks/UseLocalStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useLocalStorage("cart", []);

	const addToCart = (item) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
			if (existingItem) {
				return prevCart.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
			} else {
				return [...prevCart, { ...item, quantity: 1 }];
			}
		});
	};

	const removeFromCart = (itemId) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((cartItem) => cartItem.id === itemId);
			if (existingItem && existingItem.quantity > 1) {
				return prevCart.map((cartItem) => (cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
			} else {
				return prevCart.filter((cartItem) => cartItem.id !== itemId);
			}
		});
	};

	const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

	return <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems }}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);