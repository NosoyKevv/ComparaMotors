import React from 'react'
import Heading from '../Shared/Heading'
//images blogs
import Img1 from "../../assets/Blogs/1.png"

const BlogData = [
    {
        title: "Que pereza la vida ome",
        subtitle: "Perrea mami perrea con esa minifalda repide gosu grack perra tiki takta encara mesi siuu",
        published: "26/10/2024 by Kevin Lázaro",
        image: Img1,
    },
    {
        title: "Que pereza la vida ome",
        subtitle: "Perrea mami perrea con esa minifalda repide gosu grack perra tiki takta encara mesi siuu",
        published: "26/10/2024 by Kevin Lázaro",
        image: Img1,
    },
    {
        title: "Que pereza la vida ome",
        subtitle: "Perrea mami perrea con esa minifalda repide gosu grack perra tiki takta encara mesi siuu",
        published: "26/10/2024 by Kevin Lázaro",
        image: Img1,
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
                            <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
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
