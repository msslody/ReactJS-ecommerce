import './App.css'
import BlogSection from './components/HomePage/BlogSection'
import Home from './components/HomePage/Home'
import PopularProduct from './components/HomePage/PopularProduct'
import ProductHome from './components/HomePage/ProductHome'
import Testimonal from './components/HomePage/Testimonal'
import WeHelpSection from './components/HomePage/WeHelpSection'
import WhyChooseSection from './components/HomePage/WhyChooseSection'
import React, { useEffect, useState } from 'react'
import { getProducts } from './store/features/product/getProducts'
import { useCart } from './store/CartContext'
import Toast from './components/Alert/Toast'
import ScrollToTopButton from './components/layouts/ScrollToTopButton'

function App() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); 
  const [toastMessage, setToastMessage] = useState(''); 

  useEffect(() => {
    async function fetchProducts() {
      let product = await getProducts();
      setProducts(product);
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); 
    setToastMessage(`${product.title} has been added to your cart!`);
  };

  const closeToast = () => {
    setToastMessage(''); 
  };

  return (
    <>
      <Home/>
      <div className="product-section">
        <div className="container">
          <div className="row">
            {/* Crafted Section */}
            <div className="col-12 col-sm-12 col-lg-4">
              <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
              <p className="mb-4">
              Crafted with excellent material, our products are designed to combine durability and elegance, ensuring exceptional quality you can trust.
              </p>
              <p><a href="/shop" className="btn">Explore</a></p>
            </div>

            {/* Product Section */}
            <div className="col-md-12 col-lg-8">
              <div className="row">
                {products.map((product) => (
                  <div className="col-12 col-sm-6 col-md-4 mb-4" key={product.id}>
                    <ProductHome
                      title={product.title}
                      image={product.image}
                      price={product.price}
                      onAddToCart={() => handleAddToCart(product)}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      <ScrollToTopButton/>
      <WhyChooseSection/>
      <WeHelpSection/>
      <PopularProduct/>
      <Testimonal/>
      <BlogSection/>
      {toastMessage && <Toast message={toastMessage} onClose={closeToast} />}
    </>
  );
}
export default App;
