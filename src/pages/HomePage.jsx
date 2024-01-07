import { Alert, Loading } from "react-daisyui";
import useApi from "../components/hooks/useApi";
import ProductFilter from "../components/products/ProductFilter";
import ProductsList from "../components/products/ProductsList";
import { BASE_URL } from "../constants/api";

export default function HomePage() {
    const { data: products, isLoading, error } = useApi(BASE_URL);

    if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return (
			<Alert>
				<span>{error}</span>
			</Alert>
		);
	}

    return  (
        <div  className="container mx-auto">
            <h1 className="text-3xl my-4 font-bold leading-tight text-gray-900">Home page</h1>
            <ProductFilter products={products} />
            <ProductsList products={products} />
         </div>
    );
}