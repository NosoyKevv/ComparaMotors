import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'

//import imagenes
import Img1 from "../../assets/products/1.png"
import Img2 from "../../assets/products/2.png"
import Img3 from "../../assets/products/3.png"
import Img4 from "../../assets/products/1.png"

const ProductsData= [
  {
    id: 1,
    img: Img1,
    title: "Citroen Aircross",
    price: "81.000.000",
    aosDelay: "0",

  },
  {
    id: 2,
    img: Img2,
    title: "Lamborghini Urus SE",
    price: "398.000.000",
    aosDelay: "0",

  },
  {
    id: 3,
    img: Img3,
    title: "VolksWagen Nivus25",
    price: "75.000.000",
    aosDelay: "0",

  },
  {
    id: 4,
    img: Img4,
    title: "Citroen Aircross",
    price: "75.000.000",
    aosDelay: "0",

  },
  
]
const ProductsData2= [
  
  {
    id: 1,
    img: Img4,
    title: "Citroen Aircross",
    price: "75.000.000",
    aosDelay: "0",

  },
  {
    id: 2,
    img: Img3,
    title: "VolksWagen Nivus25",
    price: "75.000.000",
    aosDelay: "0",

  },
  {
    id: 3,
    img: Img2,
    title: "Lamborghini Urus SE",
    price: "398.000.000",
    aosDelay: "0",

  },
  

  {
    id: 4,
    img: Img3,
    title: "Citroen Aircross",
    price: "81.000.000",
    aosDelay: "0",

  },
  
]
const products = () => {
  return (
    <div>
      <div className="container">
      {/* Header seccion */}
      <Heading title="Nuestros Vehículos" 
               subtitle={"Explora"}/>
               
      {/* Body seccion */}
      <ProductCard data={ProductsData}/>
      <ProductCard data={ProductsData2}/>
      
      
      </div>
    </div>
  )
}

export default products
