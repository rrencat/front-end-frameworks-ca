import ProductsList from "../components/products/ProductsList";

export default function Home() {
    return  (
    <article className="text-left prose prose-xl mx-auto">
        <h1>Home page</h1>
        <ProductsList />
    </article>
    );
}