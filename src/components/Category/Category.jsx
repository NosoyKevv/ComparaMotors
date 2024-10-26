import React from 'react'
import Image1 from "../../assets/category/1.png";
import Image2 from "../../assets/category/2.png";
import Image3 from "../../assets/category/3.png";


import Button from '../Shared/Button';
const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'> 
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
           {/* Primera columna*/}
           <div className='py-10 pl-5 bg-gradient-to-br from-black/80 
                           to-black/70 text-white rounded-3xl relative 
                           h-[320px]flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Conoce nuestros </p>
                        <p className='text-2xl font-semibold mb-[2px]'>Autos</p>
                        <p className='text-4xl xl:text-3xl font-bold opacity-60 mb-2'>Más Vendidos</p>
                        <Button 
                        text="Ver más"
                        bgColor={"bg-white"}
                        textColor={"text-black"}/>
                    </div>
                </div>
                <img src={Image3} alt=""
                    className="w-[180px] left-[170px] absolute bottom-0" ></img>
           </div>
           {/* Segunda columna*/}
           <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow 
                           to-brandYellow text-white rounded-3xl relative 
                           h-[320px]flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-100'>Conoce nuestras </p>
                        <p className='text-2xl font-semibold mb-[2px]'>Motocicletas</p>
                        <p className='text-4xl xl:text-3xl font-bold opacity-60 mb-2'>Deportivas</p>
                        <Button 
                        text="Ver más"
                        bgColor={"bg-white"}
                        textColor={"text-brandYellow"}/>
                    </div>
                </div>
                <img src={Image1} alt=""
                    className="w-[230px] left-[130px] absolute bottom-7" ></img>
           </div>
           {/* Tercera columna*/}
           <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary 
                           to-primary text-white rounded-3xl relative 
                           h-[320px]flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-100'>Conoce nuestros </p>
                        <p className='text-2xl font-semibold mb-[2px]'>Autos</p>
                        <p className='text-4xl xl:text-3xl font-bold opacity-60 mb-2'>Deportivos</p>
                        <Button 
                        text="Ver más"
                        bgColor={"bg-white"}
                        textColor={"text-primary"}/>
                    </div>
                </div>
                <img src={Image2} alt=""
                    className="w-[380px] absolute  top-1/2 lg:top -translate-y-1/2 -right-0" ></img>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Category
