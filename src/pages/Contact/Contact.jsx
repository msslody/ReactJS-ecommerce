import React from 'react'
import ContactForm from '../../components/ContactPage/ContactForm'
import HomeContact from '../../components/ContactPage/HomeContact'
import ScrollToTopButton from '../../components/layouts/ScrollToTopButton'

export default function Contact() {
  return (
    <div>
        <HomeContact/>
        <ContactForm/>
        <ScrollToTopButton/>
    </div>
  )
}
