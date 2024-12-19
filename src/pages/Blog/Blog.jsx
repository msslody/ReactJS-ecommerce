import React from 'react'
import Testimonal from '../../components/HomePage/Testimonal'
import Blogs from '../../components/ServicesPage/Blogs'
import HomeBlog from '../../components/BlogPage/HomeBlog'
import ScrollToTopButton from '../../components/layouts/ScrollToTopButton'

export default function Blog() {
  return (
    <div>
        <HomeBlog/>
        <Blogs/> 
        <Testimonal/>
        <ScrollToTopButton/>
    </div>
  )
}
