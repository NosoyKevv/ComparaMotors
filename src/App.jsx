import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Services from './components/Services/Services'
import Products from './components/Products/Products'
import Products2 from './components/Products/Products2'
import Blogs from './components/Blogs/Blogs'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Products />
      <Services />
      <Products2 />
      <Services />
      <Blogs />
      <Partners />
      <Footer />
    </div>
  )
}

export default App
