import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/cart' || pathname === '/checkout' || pathname === '/thankyou') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null; 
}
