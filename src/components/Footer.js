import React from 'react'

function Footer({footerAPI:{titles, links}}) {
  return (
    <>
    <footer className='bg-theme pt-7 pb-4'>
      {/*Wrapper */}
      <div className='nike-container text-slate-200'>

        {/* Container */}
        <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none gap-2 md:gap-3'>
          {titles.map((val, i) => (
            <div key={i}
            className='grid items-center'>
          <h1 className='text-lg lg:text-base md:text-sm font-semibold'>{val.title}</h1>
           </div>
          ))}

          {links.map((list, i) => (
            <ul key={i}
            className='grid items-center gap-1'>
            {list.map((link, i) => (
              <li key={i} 
              className='sm:text-xs text-sm'>
              {link.link}</li>
            ))}
            </ul>
          ))}
        </div>
        <div  className='mt-5 text-center'>
        <p className='text-sm md:text-center'>&#169; {new Date().getFullYear()} Nike US All Rights Reserved.</p>
      </div>
      </div>
    </footer>
    </>
  )
}

export default Footer