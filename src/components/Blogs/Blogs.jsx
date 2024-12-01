import React, { useState } from 'react';
import Heading from '../Shared/Heading';
// Images blogs
import Img1 from "../../assets/blogs/1.png";
import Img2 from "../../assets/blogs/2.png";
import Img3 from "../../assets/blogs/3.png";

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
        image: Img2,
    },
    {
        title: "Pico y Placa en Bogotá: qué carros no circulan este viernes 25 de octubre de 2024",
        subtitle: "Ahora, los vehículos particulares con terminación 1, 2, 3, 4 o 5 no circularán los días pares. Mientras que aquellos que finalicen en 6, 7, 8, 9 u 0 no podrán transitar los días impares.",
        published: "26/10/2024 by Kevin Lázaro",
        image: Img3,
    },
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
      image: Img2,
  },
  {
      title: "Pico y Placa en Bogotá: qué carros no circulan este viernes 25 de octubre de 2024",
      subtitle: "Ahora, los vehículos particulares con terminación 1, 2, 3, 4 o 5 no circularán los días pares. Mientras que aquellos que finalicen en 6, 7, 8, 9 u 0 no podrán transitar los días impares.",
      published: "26/10/2024 by Kevin Lázaro",
      image: Img3,
  },
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
    image: Img2,
},
{
    title: "Pico y Placa en Bogotá: qué carros no circulan este viernes 25 de octubre de 2024",
    subtitle: "Ahora, los vehículos particulares con terminación 1, 2, 3, 4 o 5 no circularán los días pares. Mientras que aquellos que finalicen en 6, 7, 8, 9 u 0 no podrán transitar los días impares.",
    published: "26/10/2024 by Kevin Lázaro",
    image: Img3,
},
{
  title: "Salón del Automóvil de Bogotá 2024: precios y horarios",
  subtitle: "Más de 70 marcas de carros y motos se reunirán en Corferias del 6 al 17 de noviembre en una nueva edición del Salón del Automóvil. Serán 12 días de novedades, beneficios, exposiciones, test y asesorías, con las que esperan exponer las principales novedades de un sector que, a septiembre de 2024, registró un acumulado de 135.277 unidades.",
  published: "26/10/2024 by Kevin Lázaro",
  image: Img1,
}
    // Agrega más noticias aquí...
];

const Blogs = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="my-12">
            <div className="container">
                {/* Header sección */}
                <Heading title="Últimas Noticias" subtitle="NACIONALES" />

                {/* Blog cards en hilo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {BlogData.map((data, index) => (
                        <div key={data.title} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                            {/* Imagen sección */}
                            <div className="overflow-hidden rounded-xl mb-4">
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="w-full h-[220px] object-cover rounded-xl hover:scale-105 duration-500"
                                />
                            </div>
                            {/* Contenido sección */}
                            <div className="space-y-2">
                                <p className="text-xs text-gray-500">{data.published}</p>
                                <p className="font-bold text-lg line-clamp-1">{data.title}</p>
                                <p
                                    className={`text-sm text-gray-600 dark:text-gray-400 ${
                                        expandedIndex === index ? '' : 'line-clamp-3'
                                    }`}
                                >
                                    {data.subtitle}
                                </p>
                                <button
                                    onClick={() => handleExpand(index)}
                                    className="text-blue-500 text-sm underline"
                                >
                                    {expandedIndex === index ? 'Leer menos' : 'Leer más'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
