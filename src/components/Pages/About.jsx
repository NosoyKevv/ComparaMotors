import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Services from '..//Services/Services'
import Products from '../Products/Products'
import Products2 from '../Products/Products2'
import Blogs from '../Blogs/Blogs'
import Partners from '../Partners/Partners'
import Footer from '../Footer/Footer'
import About from '../Blogs/About'
const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Hero />
      <Services />
      <About />
      <Partners />
      <Footer />
    </div>
  )
}

export default App
