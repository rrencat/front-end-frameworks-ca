import ProductsList from "../components/products/ProductsList";

export default function HomePage() {
    return  (
        <div className=" mx-auto max-w-2xl">
            <h1 className="text-3xl my-4 font-bold leading-tight text-gray-900">Home page</h1>
            <ProductsList />
         </div>
    );
}