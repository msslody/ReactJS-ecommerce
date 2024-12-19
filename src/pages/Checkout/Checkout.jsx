import React from 'react';
import { useLocation } from 'react-router-dom';
import HomeCheckout from '../../components/CheckoutPage/HomeCheckout';
import MainCheckout from '../../components/CheckoutPage/MainCheckout';
import ScrollToTopButton from '../../components/layouts/ScrollToTopButton';

export default function Checkout() {

  const location = useLocation();
  const cart = location.state?.cart || [];  // Get cart data from state
  console.log(cart);
  return (
    <div>
      <HomeCheckout />
      <MainCheckout 
        cart={cart} 
      />
      <ScrollToTopButton/>
      
    </div>
  );
  
}
