import React from 'react'
import Product from '../utils/Product'
import Title from '../utils/Title'

function Sales({ifExists, endpoint: {title, items }}) {
 //console.log(  "endpoint:" , endpoint);
  return (
     <>
    <div className='nike-container' >
    <div>
      <Title title={title} />
      </div>
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 
      ${
        ifExists ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1" : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      }`}>
        {items?.map((item, i) => (
        <Product {...item} key={i} ifExists={ifExists}/>
        ))}
    </div>
    </div>
    </>
    
  )
}

export default Sales