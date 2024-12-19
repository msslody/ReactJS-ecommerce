import React from 'react'
import ProductHome from '../../components/HomePage/ProductHome'
import Testimonal from '../../components/HomePage/Testimonal'
import HeroSection from '../../components/ServicesPage/HeroSection'
import WhyServices from '../../components/ServicesPage/WhyServices'
import ScrollToTopButton from '../../components/layouts/ScrollToTopButton'

export default function Services() {
  return (
    <div>
        <HeroSection/>
        <WhyServices/>
        {/* <ProductHome/> */}
        <Testimonal/>
        <ScrollToTopButton/>
    </div>
  )
}
