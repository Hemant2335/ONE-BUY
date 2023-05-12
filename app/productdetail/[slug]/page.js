"use client";
import React from "react";
import Wrapper from "@/components/Wrapper";
import { Carousel } from "react-responsive-carousel";
import cardimg from "../../../assets/img/andras-vas-Bd7gNnWJBkU-unsplash.jpg";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import CardPoster from "../../../components/CardPoster"
import StarRatings from "react-star-ratings";
import MultiCrousel from "@/components/MultiCrousel";

const ProductDetail = () => {
  return (
    <Wrapper>
    <div className="md:flex m-10 ">
    <CardPoster/>
    <div className="m-2  md:max-w-[400px]">
    <h1 className="text-center text-xl font-medium">Lenovo Ideapad Gaming 3 AMD Ryzen 5 5600H 15.6" (39.62cm) FHD IPS Gaming Laptop</h1>
    <div className=" mt-2 flex  items-center "><StarRatings
          rating={4}
          starRatedColor="yellow"
          numberOfStars={5}
          starDimension="20px"
          starSpacing="2px"
          name='rating'
        />
    <h3 className="text-[15px] mt-1 "> | 2136 Reviews | 4523 sold </h3>
    </div>
    <h2 className="text-3xl mt-2  font-bold mb-2">$609.00</h2>
    <hr />
    <h3 className="text-white opacity-40 mt-2">Select Colour</h3>
    <div className=" flex mt-2 gap-8">
        <div>
        <div className="bg-white cursor-pointer  h-[40px] w-[100px] text white rounded-sm text-white"></div>
        <h3 className="mx-6 mt-1">White</h3>
        </div>
        <div>
        <div className="bg-Grey cursor-pointer h-[40px] w-[100px] text white rounded-sm text-white"></div>
        <h3 className="mx-6 mt-1">Black</h3>
        </div>
    </div>
    <h4 className="text-red mt-2 text-sm">Please Select a Colour</h4>
    <h2 className="text-xl text-white font-medium mt-4">Description</h2>
    <div>Match the pros with pristine, ultrasmooth, and stutterless graphics on the FHD (1920 x 1080) IPS display with up to 165Hz refresh rate, drive harder with 100% N-key rollover on your keyboard, dissipate heat faster with high-performance thermals, and pinpoint your enemies’ location instantly with immersive Nahimic audio.</div>
    <div className=" flex gap-8 mt-2">
    <button className="bg-Grey h-[50px] w-[100px] rounded-sm px-2">Buy Now</button>
    <button className="bg-Grey h-[50px] w-[100px] rounded-sm">Add to cart</button>
    </div>
    </div>
    </div>
    <h1 className="mb:text-2xl text-xl font-medium mb-4">You Also Like This</h1>
    <MultiCrousel/>
    </Wrapper>
  );
};

export default ProductDetail;
