import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import CheckoutPage from "./pages/CheckoutPage"
import CheckoutSuccess from "./pages/CheckoutSuccess"
import ProductPage from "./pages/ProductPage"
import NotFound from "./pages/NotFound"
import Layout from './components/layout/Layout'


function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="checkoutSuccess" element={<CheckoutSuccess />} />
      <Route path="product/:id" element={<ProductPage />} />

      {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
  )
}

export default App
