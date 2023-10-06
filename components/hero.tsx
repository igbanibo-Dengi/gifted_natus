"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <>
      <main className="relative">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop={true}
          // effect="fade" // Set the effect to 'fade'
          // fadeEffect={{ crossFade: true }} // Enable the crossFade parameter
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <div className="h-screen sm:h-[750px] xl:h-screen relative flex items-center justify-center">
              <Image
                src="/hero-img-2.jpg"
                fill
                alt="hero image"
                className="object-cover"
              />
              <div className="w-full px-5 text-center h-full bg-black/60 pt-10 absolute text-white flex flex-col justify-center items-center">
                <h1 className="leading-none text-[28px] md:text-[46px] lg:text-[65px] font-bold  uppercase">
                  gifted natus foundation
                </h1>
                <h3 className="t uppercase ext-[18px] md:text-[32px] font-bold mb-3">
                  increasing quality of life
                </h3>
                <p className="max-w-[700px] leading-relaxed text-center text-sm sm:text-[20px]">
                  Our goal is to impact the lives of Bayelsans with intervention
                  programs mainly in the areas of health, education, sports,
                  entrepreneurship, skills acquisition and youth development.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-screen sm:h-[750px] xl:h-screen relative flex items-center justify-center">
              <Image
                src="/hero-img-1.jpg"
                fill
                alt="hero image"
                className="object-cover"
              />
              <div className="w-full px-5 text-center h-full bg-black/60 pt-10 absolute text-white flex flex-col justify-center items-center">
                <p className="leading-none text-[28px] md:text-[46px] lg:text-[65px] font-bold  uppercase">
                  gifted natus foundation
                </p>
                <p className="t uppercase ext-[18px] md:text-[32px] font-bold mb-3">
                  increasing quality of life
                </p>
                <p className="max-w-[700px] leading-relaxed text-center text-sm sm:text-[20px]">
                  Our goal is to impact the lives of Bayelsans with intervention
                  programs mainly in the areas of health, education, sports,
                  entrepreneurship, skills acquisition and youth development.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-screen sm:h-[750px] xl:h-screen relative flex items-center justify-center">
              <Image
                src="/hero-img-3.jpg"
                fill
                alt="hero image"
                className="object-cover"
              />
              <div className="w-full px-5 text-center h-full bg-black/60 pt-10 absolute text-white flex flex-col justify-center items-center">
                <p className="leading-none text-[28px] md:text-[46px] lg:text-[65px] font-bold  uppercase">
                  gifted natus foundation
                </p>
                <h3 className=" uppercase text-[18px] md:text-[32px] font-bold mb-3">
                  increasing quality of life
                </h3>
                <p className="max-w-[700px] leading-relaxed text-center text-sm sm:text-[20px]">
                  Our goal is to impact the lives of Bayelsans with intervention
                  programs mainly in the areas of health, education, sports,
                  entrepreneurship, skills acquisition and youth development.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
};

export default Hero;
