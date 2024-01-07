import { Link } from "react-router-dom";

export default function CheckoutSuccess() {
    return (
        <div className="max-w-md mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
            <h1>Congratulations your items will be sent to you shortly!</h1>
            <p className="mt-10 text-indigo-600 hover:text-indigo-900">
                <Link to="/">Shop more</Link>
            </p>
        </div>
    );
}