import { Navbar } from "react-daisyui";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useCart } from "../context/CartContext";

export default function Header() {
    const { totalItems } = useCart();

    return (
        <Navbar className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <NavLink to="/" className="flex items-center">
                        Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/contact" className="flex items-center">
                        Contact
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/checkout" className="flex items-center">
                        {totalItems !== 0 ? totalItems : null}
                        <ShoppingCartIcon className="h-6 w-6 mr-2" />
                    </NavLink>
                </div>
            </div>
        </Navbar>
    );
}


