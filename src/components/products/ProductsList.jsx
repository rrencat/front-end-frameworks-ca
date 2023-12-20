import { useEffect, useState } from 'react';
import { BASE_URL } from "../../constants/api";
import ProductItem from './ProductItem';

export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

  
    useEffect(() => {
        async function getProducts() {
            try {
                setIsError(false);
                setIsLoading(true);
                const response = await fetch(BASE_URL);

                if (response.ok) {
                  const json = await response.json();
                  setProducts(json);
                  console.log(json)
                }
                    

            } catch {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
    }
    getProducts();
  }, []);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
    
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );

}