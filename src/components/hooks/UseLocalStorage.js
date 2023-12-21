import { useState, useEffect } from "react";

export const useLocalStorage = (key, defaultValue) => {
	// Initialize the state with the value from local storage or the default value
	const [state, setState] = useState(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
	});

	// Update local storage when the state changes
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
};