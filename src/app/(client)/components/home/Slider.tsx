 "use client"
 import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";


export default function SimpleSlider() {
  return (
    <Swiper
      className="z-0 mb-[30px ] cursor-pointer" 
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={true}
      autoplay={{
        delay: 4000,
      }}
      speed={1500}
      modules={[Autoplay, Navigation]}
    >
     
      <SwiperSlide>
        <Image
          width={0}
          height={0}
          layout="responsive"
          alt="slider1"
          src="/home/slider_1.webp"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={0}
          height={0}
         
          layout="responsive"
          alt="slider2"
          src="/home/slider_2.webp"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={0}
          height={0}
          layout="responsive"
          alt="slider3"
          src="/home/slider_3.webp"
        />
        
      </SwiperSlide>
    </Swiper>
  );
}
