'use client'


import { motion } from 'framer-motion';
import React from 'react'
import CountUp from 'react-countup';

const Impact = () => {
  return (
    <section className='bg-background flex flex-col p-10  gap-5 justify-center items-center border-t border-b'>
      <p className='text-2xl md:text-3xl font-semibold text-center uppercase'>Our charitable impact</p>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="w-full justify-center text-4xl font-extrabold flex flex-col md:flex-row gap-10 text-center md:gap-40 lg:gap-40 p-10">
        <div>
          <p className='text-base'>Over</p>
          <CountUp start={0} end={300} delay={0} enableScrollSpy />
          <p className='text-base'>Shcolarships</p>
        </div>
        <div>
          <p className='text-base'>Over</p>
          <CountUp start={0} end={500} delay={0} enableScrollSpy />
          <p className='text-base'>Empowered Youths</p>
        </div>
        <div>
          <p className='text-base'>Over</p>
          <CountUp start={0} end={800} delay={0} enableScrollSpy />
          <p className='text-base'>Graduated Trainees </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Impact