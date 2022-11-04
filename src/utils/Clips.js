import React from 'react'

function Clips({clip, imgsrc}) {
  return (
    <>
    <div className='relative h-28 w-32 rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:20 sm:h-14'>
        <img className='flex h-full w-full object-cover absolute top-0 left-0 right-0 opacity-100 z-10 transition-opacity duration-500' src={imgsrc} alt="img/clips" />
        <video 
        autoPlay={true}
        loop={true}
        muted={true}
        className='absolute top-0 left-0 h-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl  '>
        <source type='video/mp4' src={clip}/>
        </video>
    </div>
    </>
  )
}

export default Clips