'use client'

import React from 'react'
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';


const Videoplayer = () => {
  return (
    <div>
      <CldVideoPlayer
        autoPlay='always'
        width="1080"
        height="1080"
        src="video/vid"
      />
    </div>
  )
}

export default Videoplayer