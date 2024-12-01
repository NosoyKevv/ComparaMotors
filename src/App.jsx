import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Products2 from './components/Products/Products2';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import News from './components/Pages/News'; // Importa la nueva página
import Videos from './components/Blogs/Videos'
import About from './components/Blogs/About'
const App = () => {
  return (
    <Router>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
        <Navbar />
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Category />
                <Services />
                <Videos />
                <Partners />
                <Footer />
              </>
            }
          />
          {/* Nueva página */}
          <Route path="/News" element={<News />} />
          <Route path="/About" element={<About />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
