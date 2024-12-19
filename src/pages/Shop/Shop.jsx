
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../store/features/product/getAllProducts';
import HomeShop from '../../components/Shop/HomeShop';
import ProductCard from '../../components/Shop/ProductCard';
import { useCart } from '../../store/CartContext'; 
import Toast from '../../components/Alert/Toast'; 
import ScrollToTopButton from '../../components/layouts/ScrollToTopButton';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); 
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    async function fetchAllProducts() {
      const product = await getAllProducts();
      setProducts(product);
    }
    fetchAllProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); 
    setToastMessage(`${product.title} has been added to your cart!`);
  };

  const closeToast = () => {
    setToastMessage(''); 
  };
  console.log('Toast message:', toastMessage);
  return (
    <div>
      <HomeShop />
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <ProductCard
                title={product.title}
                image={product.image}
                price={product.price}
                onAddToCart={() => handleAddToCart(product)} 
              />
            </div>
          ))}
        </div>
      </div>

      {toastMessage && <Toast message={toastMessage} onClose={closeToast} />} 
      <ScrollToTopButton/>
    </div>
  );
}
