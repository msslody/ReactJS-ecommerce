import React from 'react';
import { useCart } from '../../store/CartContext';
import MainCart from '../../components/CartPage/MainCart';
import HomeCart from '../../components/CartPage/HomeCart';
import ScrollToTopButton from '../../components/layouts/ScrollToTopButton';

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();



  return (
    <>
    <HomeCart/>
    <div className="container">
      <MainCart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
    <ScrollToTopButton/>
    </>
  );
}
