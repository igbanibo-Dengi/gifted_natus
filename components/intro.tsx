import Image from 'next/image'
import React from 'react'
import image from "../public/ceo-img.jpg"
import { AiFillPlayCircle } from "react-icons/ai"



import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Videoplayer from './videoplayer'


const Intro = () => {
  return (
    <section className='container py-10'>
      <div className='flex flex-col-reverse sm:flex-row gap-5'>
        <div className='flex-1 flex flex-col justify-center'>
          <h2 className=' mb-3 text-2xl lg:text-4xl font-bold'>My Vision for the Gifted Natus Foundation</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi minima, incidunt veritatis quam officiis, deleniti recusandae optio, quae facere ipsum exercitationem vitae corrupti. Voluptatem animi est similique nulla nam laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, consequuntur ea atque in cumque odit expedita ut delectus earum odio?</p>
          <div className='mx-auto animate-bounce mt-10'>
            <Popover>
              <PopoverTrigger>

                <AiFillPlayCircle className="text-primary text-[60px]" />
              </PopoverTrigger>
              <PopoverContent>
                <Videoplayer />
              </PopoverContent>
            </Popover>
          </div>



          <p className='text-center'>A message from the founder</p>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <Image
            src={image}
            alt='Gited Natus'
          />
        </div>
      </div>
    </section>
  )
}

export default Intro