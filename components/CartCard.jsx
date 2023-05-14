'use client'

import React from 'react'
import Image from 'next/image'
import poster from "../assets/img/taylor-smith-aDZ5YIuedQg-unsplash.jpg"
import StarRatings from 'react-star-ratings'

const CartCard = () => {
  return (
    <div className='bg-Grey relative md:h-[150px] h-[400px] md:w-[700px] w-[250px] flex-col flex rounded-sm justify-center md:flex-row gap-5'>
        <Image src={poster} alt='img' className='aspect-[16/10] md:aspect-auto object-cover m-[20px] md:m-2 max-w-[200px]' />
        <div className=''>
        <h3 className='text-bold mt-2 text-start'>Lenovo Ideapad Gaming 3 AMD Ryzen 5 5600H 15.6" (39.62cm) FHD IPS Gaming Laptop</h3>
        <div className='text-start mt-2 text-white/60'>Gaming Pc</div>
        <div className='text-start  text-white/60'>Color : Black</div>
        <h4 className='text-start  text-bold text-xl'>$600</h4>
        <button className=' absolute right-2 bottom-3 px-2 py-2 bg-white rounded-md text-black font-semibold hover:bg-black transition-transform active:scale-105 hover:text-white'>Delete</button>
        </div>
    </div>
  )
}

export default CartCard