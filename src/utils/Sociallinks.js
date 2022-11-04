import React from 'react'

function Sociallinks({ icon }) {
  return (
    <>
    <img
    className='w-8 h-8 flex items-center cursor-pointer md:h-6 md:w-6 sm:w-5 sm:h-5 transition-all transition-ease duration-200 hover:scale-110'
    src={icon}
    alt="icon/social" />
    </>
  )
}

export default Sociallinks