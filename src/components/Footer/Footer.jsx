import React from 'react'
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/*detalles*/}
          <div className='py-8 px-4'>
            <a href="#" className='text-primary font-semibold 
                                   tracking-widest text-2xl uppercase sm:text-3xl'>ComparaMotors
            </a>
          <p className='text-gray-600 dark:text-white/7 lg:pr-24 pt-3'>Contamos con un gran equipo de trabajo preparado para resolver 
            cualquier tipo de problema y ayudarte siempre que lo necesites. 
          </p>
          </div>
          {/*footer links*/}
          <div className='py-8 px-4 col-span-2 sm:col-auto'>
            <h1 className='text-xl font-bold sm:text-left mb-3'>Información Importante

            </h1>
            <div>
              <div className='flex items-center gap-3'>
                <FaLocationArrow />
                <p>Sogamoso , Boyacá</p>
                <p>Colombia</p>
              </div>
                <div className='flex item-center-gap-3 mt-6'>
                  <FaMobileAlt />
                  <p>+57 ##########</p>
                </div>
            </div>
            {/*SOCIAL LINKS*/}
            <div className='flex items-center gap-3 mt-6'>
              <a href="https://www.instagram.com/comparamotors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <FaInstagram className='text-3xl
                             hover:text-primary duration-300'/>
              </a>
              <a href="https://www.facebook.com/comparamotors/">
                <FaFacebook className='text-3xl
                             hover:text-primary duration-300'/>
              </a>
              <a href="#">
                <FaWhatsapp className='text-3xl
                             hover:text-primary duration-300'/>
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
