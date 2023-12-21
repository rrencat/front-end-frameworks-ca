import { BASE_URL } from "../../constants/api";
import ProductItem from './ProductItem';
import useApi from "../hooks/useApi.js";

export default function ProductsList() {
  const { data: products, isLoading, isError } = useApi(BASE_URL);

	if (isLoading) {
		return <div>Loading posts...</div>;
	}

	if (isError) {
		return <div>Error loading posts</div>;
	}
    
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );

}



	