import React from 'react'
import Image from 'next/image'
import cardposter from '../assets/img/andras-vas-Bd7gNnWJBkU-unsplash.jpg'
import Link from 'next/link'

const ProductCard = () => {

  const name = "hindi";

  return (
    <Link href={`/productdetail/${name}`} className='transform overflow-hidden hover:scale-105 duration-200'>
        <Image src={cardposter} alt='custom' className='cursor-pointer rounded-sm  aspect-[16/9] md:aspect-auto object-cover max-h-[250px]'/>
        <div className='p-4 bg-black text-white'>
            <h2 className='text-lg'>Product Name</h2>
            <h3 className='opacity-30 '>Price</h3>
        </div>
    </Link>
  )
}
export default ProductCard