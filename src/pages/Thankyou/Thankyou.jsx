import React from 'react'
import HomeCart from '../../components/CartPage/HomeCart'
import Thanks from '../../components/ThankYouPage/Thanks'
import ScrollToTopButton from '../../components/layouts/ScrollToTopButton'

export default function Thankyou() {
  return (
    <div>
        <HomeCart/>
        <Thanks/>
        <ScrollToTopButton/>

    </div>
  )
}
