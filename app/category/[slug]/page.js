'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import Wrapper from '@/components/Wrapper';
import { Context } from '@/app/Context/User';
import { useContext } from 'react';


const Category = () => {
  const params = useParams();
  const {slug} = params;

  const {category} = useContext(Context);

  useEffect=(()=>{

    

  },[])

  return (
    <Wrapper>
    <h1 className='text-4xl text-center mt-10'>{slug}</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mb-5 lg:grid-cols-3 gap-4 px-5">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
    </Wrapper>
  )
}
export default Category 