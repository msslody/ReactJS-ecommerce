import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/layouts/RootLayout.jsx';
import Shop from './pages/Shop/Shop.jsx';
import About from './pages/About/About.jsx';
import Services from './pages/Services/Services.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import Thankyou from './pages/Thankyou/Thankyou.jsx';
import { CartProvider } from './store/CartContext';
import ScrollToTop from './components/CartPage/ScrollToTop.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop /> {/* Place here so it is part of the Router context */}
        <RootLayout />
      </>
    ),
    children: [
      { path: '/', element: <App /> },
      { path: '/shop', element: <Shop /> },
      { path: '/about', element: <About /> },
      { path: '/services', element: <Services /> },
      { path: '/blog', element: <Blog /> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <Cart /> },
      { path: '/checkout', element: <Checkout /> },
      { path: '/thankyou', element: <Thankyou /> }
      
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> 
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
