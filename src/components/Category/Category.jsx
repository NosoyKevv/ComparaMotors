import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link para la navegación
import NationalImage from "../../assets/category/news1.png"; // Imagen para Noticias Nacionales
import InternationalImage from "../../assets/category/news1.png"; // Imagen para Noticias Internacionales
import OtherImage from "../../assets/category/news1.png"; // Imagen para Otras Noticias

import Button from '../Shared/Button';

const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          
          {/* Noticias Nacionales */}
          <div className='py-6 pl-5 bg-gradient-to-br from-red-800 to-blue-600 text-white rounded-3xl relative h-[250px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-300'>Últimas </p>
                <p className='text-2xl font-semibold mb-[2px]'>Noticias</p>
                <p className='text-3xl xl:text-2xl font-bold opacity-80 mb-2'>Nacionales</p>
                <Link to="/News">
                  <Button 
                    text="Leer más"
                    bgColor={"bg-red-500"} // Fondo rojo
                    textColor={"text-white"} // Texto blanco
                  />
                </Link>
              </div>
            </div>
            <img 
              src={NationalImage} 
              alt="Noticias Nacionales"
              className="w-[250px] left-[140px] absolute bottom-0" />
          </div>
          
          {/* Noticias Internacionales */}
          <div className='py-6 pl-5 bg-gradient-to-br from-blue-800 to-green-600 text-white rounded-3xl relative h-[250px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-300'>Últimas </p>
                <p className='text-2xl font-semibold mb-[2px]'>Noticias</p>
                <p className='text-3xl xl:text-2xl font-bold opacity-80 mb-2'>Internacionales</p>
                <Link to="/News">
                  <Button 
                    text="Leer más"
                    bgColor={"bg-red-500"} // Fondo rojo
                    textColor={"text-white"} // Texto blanco
                  />
                </Link>
              </div>
            </div>
            <img 
              src={InternationalImage} 
              alt="Noticias Internacionales"
              className="w-[250px] left-[140px] absolute bottom-0" />
          </div>

          {/* Otras Noticias */}
          <div className='py-6 pl-5 bg-gradient-to-br from-red-800 to-purple-600 text-white rounded-3xl relative h-[250px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-300'>Explora </p>
                <p className='text-2xl font-semibold mb-[2px]'>Otras</p>
                <p className='text-3xl xl:text-2xl font-bold opacity-80 mb-2'>Noticias</p>
                <Link to="/News">
                  <Button 
                    text="Ver más"
                    bgColor={"bg-red-500"} // Fondo rojo
                    textColor={"text-white"} // Texto blanco
                  />
                </Link>
              </div>
            </div>
            <img 
              src={OtherImage} 
              alt="Otras Noticias"
              className="w-[250px] left-[140px] absolute bottom-0" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Category;
