import React, { useState } from 'react'
import { assets } from '../assets/assets'

const BgSlider = () => {
    const [slider , setSlider] = useState(50)
    const handleSliderChange = (e) =>{
        setSlider(e.target.value)
    }
  return (
    <div className='pb-10 md:py-20 mx-2' >
    {/* title */}
    <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
    Remove Background With High<br /> Quality and Accuracy
  </h1>
  <div className='relative w-full max-w-3xl m-auto overflow-hidden rounded-xl'>
    {/* bg-img */}
    <img src={assets.image_w_bg} style={{clipPath:`inset(0 ${100.2 - slider}% 0 0)`}} alt='' />

    {/* foreground img  */}
    <img className='absolute top-0 left-0 w-full h-full' src={assets.image_wo_bg} style={{clipPath:`inset(0 0 0 ${slider}%)`}} alt='' />

    {/* Slider  */}
    <input className='absolute top-1/2  left-1/2 transfrom -translate-x-1/2  -translate-y-1/2 w-full z-10 slider' type='range' min={0} max={100} value={slider} onChange={handleSliderChange} />

  </div>
  </div>
  )
}

export default BgSlider
