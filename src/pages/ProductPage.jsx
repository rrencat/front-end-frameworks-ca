import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { BASE_URL } from "../constants/api";

export default function ProductPage() {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        async function getProduct(url) {
          try {
            setIsLoading(true);
            setIsError(false);
    
            const response = await fetch(url);
            const json = await response.json();
    
            setProduct(json);
          } catch (error) {
            console.log(error);
            setIsError(true);
          } finally {
            setIsLoading(false);
          }
        }
        getProduct(`${BASE_URL}/${id}`);
    }, [id]);

    if (isLoading || !product) {
        return <div>Loading</div>;
      }
    
      if (isError) {
        return <div>Error</div>;
      }

    console.log(product)

    return (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.imageUrl} alt={product.title} />
          <p>Price: {product.discountedPrice}</p>
        </div>
      );
}