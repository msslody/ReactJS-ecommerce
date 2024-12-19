import React from 'react'
import WhyChooseSection from '../../components/HomePage/WhyChooseSection'
import Team from '../../components/AboutPage/Team'
import Testimonal from '../../components/HomePage/Testimonal'
import HomeAbout from '../../components/AboutPage/HomeAbout'
import ScrollToTopButton from '../../components/layouts/ScrollToTopButton'

export default function About() {
  return (
    <div>
        <HomeAbout/>
        <WhyChooseSection/>
        <Team/>
        <Testimonal/>
        <ScrollToTopButton/>
    </div>
  )
}
