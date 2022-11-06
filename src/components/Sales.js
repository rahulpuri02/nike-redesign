import React from 'react'
import Product from '../utils/Product'
import Title from '../utils/Title'

function Sales({endpoint: {title, items }}) {
 //console.log(  "endpoint:" , endpoint);
  return (
    <>
    <div>
      <Title title={title} />
      </div>

      <div>
        {items?.map((item, i) => (
        <Product {...item} key={i} />
        ))}
    </div>
    </>
  )
}

export default Sales