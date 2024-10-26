import React from 'react'
import Heading from '../Shared/Heading'
//images blogs
import Img1 from "../../assets/blogs/2.avif"
import Img2 from "../../assets/blogs/3.avif"
import Img3 from "../../assets/blogs/1.png"

const BlogData = [
    {
        title: "Salón del Automóvil de Bogotá 2024: precios y horarios",
        subtitle: "Más de 70 marcas de carros y motos se reunirán en Corferias del 6 al 17 de noviembre en una nueva edición del Salón del Automóvil. Serán 12 días de novedades, beneficios, exposiciones, test y asesorías, con las que esperan exponer las principales novedades de un sector que, a septiembre de 2024, registró un acumulado de 135.277 unidades.",
        published: "26/10/2024 by Kevin Lázaro",
        image: Img1,
    },
    {
        title: "Septiembre, el mes de 2024 en el que más vehículos nuevos se vendieron, con 17.117",
        subtitle: "Durante septiembre del 2024, el sector automotor vendió 17.117 vehículos nuevos, un aumento del 10,3% respecto a septiembre del 2023 y una disminución del 28% respecto a septiembre del 2022, según datos entregados por la Federación Nacional de Comerciantes de Colombia (Fenalco) y la Asociación Nacional de Industriales (Andi).",
        published: "26/10/2024 by Kevin Lázaro",
        image: Img3,
    },
    {
        title: "Pico y Placa en Bogotá: qué carros no circulan este viernes 25 de octubre de 2024",
        subtitle: "Ahora, los vehículos particulares con terminación 1, 2, 3, 4 o 5 no circularán los días pares. Mientras que aquellos que finalicen en 6, 7, 8, 9 u 0 no podrán transitar los días impares.",
        published: "26/10/2024 by Kevin Lázaro",
        image: Img2,
    },
]
const Blogs = () => {
  return (
    <div className='my-12'>
      <div className="container"> 
        {/* Header seccion */}
      <Heading title="Últimas Noticias" 
               subtitle={"Infórmate"}/>
    
      {/* Blogs seccion */}
        <div className='grid grid-cols-1 sm:grid-cols-2 
                        md:grid-cols-3 gap-6 gap-y-8 
                        sm:gap-4 md:gap-7'>
        {/*Blog cards*/}
        {
            BlogData.map((data)=>(
                <div key={data.title} className='bg-white dark:bg-gray-900 '>
                    {/*Image seccion gaaa */}
                    <div className='overflow-hidden rounded.2xl mb-2'>
                        <img src={data.image} alt=""  
                        className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'/>
                    </div>
                    {/*Contedido seccion gaaa */}
                        <div className='space-y-2'>
                            <p className='text-xs text-gray-500'>{data.published}</p>
                            <p className='font-bold line clamp-1'>{data.title}</p>
                            <p className='line-clamp-5 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                        </div>
                </div>
            ))
        }

        </div>
      </div>
    </div>
  )
}

export default Blogs
