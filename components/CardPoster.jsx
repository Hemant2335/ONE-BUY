"use client";

import React from "react";
import poster from "../assets/img/alexander-rotker-l8p1aWZqHvE-unsplash.jpg";
import poster1 from "../assets/img/domino-j7zu2kpTnwY-unsplash.jpg";
import poster2 from "../assets/img/taylor-smith-aDZ5YIuedQg-unsplash.jpg";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

const thumbs = [
  { id: 1, url: poster },
  { id: 2, url: poster1 },
  { id: 3, url: poster2 },
];

const HeroBanner = () => {
  return (
    <div className=" rounded-sm  relative w-[400px] md:w-[500px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute left-0 h-8 flex items-center cursor-pointer justify-center w-8 md:w-12 md:h-12 top-[110px] md:top-[100px] z-10  bg-black hover:opacity-30 rounded-full"
          >
            <FiArrowLeft />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 h-8 flex items-center cursor-pointer justify-center w-8 md:w-12 md:h-12 top-[110px] md:top-[100px] z-10  bg-black hover:opacity-30 rounded-full"
          >
            <FiArrowRight />
          </div>
        )}
        renderThumbs={() =>
          thumbs.map((item) => (
            <Image src={item.url} alt={`thumb`} key={item.id} />
          ))
        }
      >
        <div className="max-w-[50]">
          <Image
            src={poster}
            className="aspect-[16/10] md:aspect-auto object-cover max-h-[300px]"
          />
        </div>
        <div>
          <Image
            src={poster1}
            className="aspect-[16/9] md:aspect-auto object-cover max-h-[300px] "
          />
        </div>
        <div>
          <Image
            src={poster2}
            className="aspect-[16/10] md:aspect-auto object-cover max-h-[300px]"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
