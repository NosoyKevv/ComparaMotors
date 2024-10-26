import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'

//import imagenes
import Img1 from "../../assets/products/4.png"

const ProductsData= [
  {
    id: 1,
    img: Img1,
    title: "R1 Yamaha",
    price: "89.000.000",
    aosDelay: "0",

  },
  {
    id: 2,
    img: Img1,
    title: "R1 Yamaha",
    price: "67.000.000",
    aosDelay: "0",

  },
  {
    id: 3,
    img: Img1,
    title: "R1 Yamaha",
    price: "34.000.000",
    aosDelay: "0",

  },
  {
    id: 4,
    img: Img1,
    title: "R1 Yamaha",
    price: "50.000.000",
    aosDelay: "0",

  },
  
]
const products = () => {
  return (
    <div>
      <div className="container">
      {/* Header seccion */}
      <Heading title="Motos Deportivas" 
               subtitle={"Explora"}/>
               
      {/* Body seccion */}
      <ProductCard data={ProductsData}/>
      <ProductCard data={ProductsData}/>
      
      
      </div>
    </div>
  )
}

export default products
