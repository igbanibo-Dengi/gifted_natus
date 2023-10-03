'use client'

import Image from 'next/image';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const Hero = () => {


  return (
    <section className='h-screen'>
      <swiper-container
        slides-per-view="1"
        grid-rows="1"
        mousewheel-force-to-axis="true"
        // autoplay={{ delay: 1000 }} // Set the delay (in milliseconds) for auto-scrolling
        className='border border-red-500 flex justify-center items-center'
      >
        <swiper-slide>
          <div className='h-[600px] flex items-center justify-center border border-white'>
            <Image
              src="/hero-img-1.jpg"
              fill
              alt='hero image'
              className='object-cover'

            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className='h-[600px] flex items-center justify-center border border-white'>
            <Image
              src="/hero-img-2.jpg"
              fill
              alt='hero image'
              className='object-cover'

            />
          </div>
        </swiper-slide>
      </swiper-container>
    </section>
  )
}

export default Hero