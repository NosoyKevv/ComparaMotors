import React from 'react'
import Slider from "react-slick";
import Image1 from "../../assets/hero/1.png"
import Image2 from "..//../assets/hero/2.png"
import Image3 from "..//../assets/hero/3.png"
import Button from '../Shared/Button';

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Rendimiento",
        title: "Nissan Kicks",
        title2: "Confiable",
        description: "Amigable con tu vida"
    },   
     {
        id: 2,
        img: Image2,
        subtitle: "Confortable",
        title: "Chevrolet Colorado",
        title2: "Todoterreno",
        description: "Conquista los caminos más rudos con confort, estilo, conectividad y sobre todo potencia. La Chevrolet Colorado, llegó para desafiar a la rudeza como nunca te habías imaginado."
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Economica",
        title: "Nissan Pathfinder",
        title2: "Capacidad",
        description: "La nueva Nissan Pathfinder incluye una totalmente nueva transmisión automática de 9 velocidades. Además, su motor V6 de 270 caballos de fuerza te brinda un rendimiento dinámico y potente combinado con una respuesta rápida y fuerte al acelerar."
    },
]

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  }

  return (
    <div className="container" >
      <div className="overflow-hidden rounded-3xl min-h.[550px] sm:min-h-[650px]
                      hero-bg-color flex justify-center items-center">

            <div className="container pb-8 sm:pb-0">
        {/* Seccion imagenes scroleables */}
        <Slider {...settings}>
            {
                HeroData.map((data) => (
                    <div key={data.id}>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            {/* CONTENIDO DEL TEXTO */}
                            <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center 
                                            sm:text-left order-2 sm:order-1 relative z-10">
                                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">{data.subtitle}</h1> 
                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                                    <h1 className="text-5xl uppercase text-white dark:text-white/5 
                                                   sm:text-[80px] md:text-[100px] xl:text-[140px] font-bold">{data.title2}</h1>
                                <div>
                                    <Button 
                                        text="Comprar ahora"
                                        bgColor="bg-primary"
                                        textColor="text-white"/>
                                </div>
                            </div>

                        {/* SECCION DE LAS IMAGNES */}
                            <div className="order-1 sm:order-2">
                                <img src={data.img} alt="" className="w-[300px] sm:w-[550px] h-[300px]  sm:h-[450px] 
                                                                      sm:scale-105 lg:scale-110 object-contain
                                                                      mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
        </div>
        </div>
    </div>
  )
}

export default Hero
