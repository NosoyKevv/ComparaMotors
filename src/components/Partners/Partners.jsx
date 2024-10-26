import React from 'react'
import brand1 from '../../assets/Brand/2.png'
const Partners = () => {
  return (
    <div className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10 '>
      <div className="container ">
        <div className="grid grid-cols-5 gap-3 place-items-center opaacity-50">
            <img src={brand1} alt="brand" className='w[-80px] dark:invert' />
            <img src={brand1} alt="brand" className='w[-80px] dark:invert' />
            <img src={brand1} alt="brand" className='w[-80px] dark:invert' />
            <img src={brand1} alt="brand" className='w[-80px] dark:invert' />
            <img src={brand1} alt="brand" className='w[-80px] dark:invert' />
        </div>
      </div>
    </div>
  )
}

export default Partners
