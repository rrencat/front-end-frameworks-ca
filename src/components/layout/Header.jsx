import { Menu, Navbar } from "react-daisyui";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <Navbar>
            <div className="flex-1">
                <NavLink to="/"> JS-F-CA</NavLink>
            </div>
            <div className="flex-none">
                <Menu horizontal={true} className="px-1">
                    <Menu.Item>
                        <NavLink to="/">Home</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/contact">Contact</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/checkout">Checkout</NavLink>
                    </Menu.Item>
                </Menu>
            </div>
        </Navbar>
    )
}