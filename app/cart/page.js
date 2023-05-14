import React from 'react'
import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import CartCard from '@/components/CartCard'

const cart = () => {
  return (
    <Wrapper>
        <div className='text-center'>
        <h1 className='text-4xl text-center mt-10'>Shopping Cart</h1>
        <div className='md:flex md:flex-row mx-[100px]  gap-8 flex flex-col justify-center mt-10 mb-10'>
        <div className='flex flex-col gap-8'>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        </div>
        <div>
        <h2 className='font-medium text-xl mb-8'>Summary</h2>
        <div className='bg-Grey md:h-[200px] md:w-[350px] w-auto h-[250px]  rounded-md p-4'>
            <h3 className='text-start font-medium mb-2'>SubTotal : $ 1900</h3>
            <hr />
            <div className='text-start mt-2'>This Tells you about total Expenses you would cost after buying the products present in your cart and also Never doubt our calculations</div>
        </div>
        <button className='px-10 py-2 bg-white mt-4 rounded-lg text-black font-semibold hover:text-white hover:bg-Grey transition-transform active:scale-105'>Check Out</button>
        </div>
        </div>
        </div>


    {/* Empty Cart Page  */}

    <div className='text-center mb-2'>Your Cart is Empty</div>
        
    </Wrapper>
  )
}

export default cart