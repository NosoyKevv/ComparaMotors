import React from 'react';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';  // Asegúrate de importar useNavigate
import Button from '../Shared/Button';

const NewsData = [
  {
    id: 1,
    img: "https://www.elespectador.com/resizer/v2/E3NRZIBA6VDI5NPUC7JBG43J34.jpg?auth=4bf2c9fe80bf1be7f18bb19d1fd24cd044e96ee93036dd70840ccae98f3492e0&width=920&height=613&smart=true&quality=60",
    title: "Salón del Automóvil de Bogotá 2024: precios y horarios",
    description: "Más de 70 marcas de carros y motos se reunirán en Corferias del 6 al 17 de noviembre en una nueva edición del Salón del Automóvil."
  },
  {
    id: 2,
    img: "https://www.portafolio.co/files/article_content/uploads/2024/03/01/65e1eedd7379d.jpeg",
    title: "Septiembre, el mes de 2024 en el que más vehículos nuevos se vendieron.",
    description: "Durante septiembre del 2024, el sector automotor vendió 17.117 vehículos nuevos."
  },
  {
    id: 2,
    img: "https://www.portafolio.co/files/article_content/uploads/2024/03/01/65e1eedd7379d.jpeg",
    title: "Septiembre, el mes de 2024 en el que más vehículos nuevos se vendieron.",
    description: "Durante septiembre del 2024, el sector automotor vendió 17.117 vehículos nuevos."
  }
];

const Hero = () => {
  const navigate = useNavigate();  // Hook de navegación

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    autoplay: true
  }

  const handleRedirect = () => {
    navigate('/news');  // Redirige a la página de noticias
  }

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          {/* Sección imágenes desplazables */}
          <Slider {...settings}>
            {NewsData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* CONTENIDO DEL TEXTO */}
                  <div className="flex flex-col justify-center gap-6 sm:pl-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">{data.title}</h1>
                    <p className="text-lg sm:text-xl text-gray-700">{data.description}</p>
                    <div>

                    </div>
                  </div>

                  {/* SECCIÓN DE LAS IMÁGENES */}
                  <div className="order-1 sm:order-2">
                    <img 
                      src={data.img} 
                      alt={data.title} 
                      className="w-full sm:w-[550px] h-[300px] sm:h-[450px] 
                                 sm:scale-105 lg:scale-110 object-cover
                                 mx-auto rounded-xl drop-shadow-xl transition-transform transform hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
