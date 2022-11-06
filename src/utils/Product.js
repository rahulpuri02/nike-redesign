import React from 'react'
import {StarIcon, ShoppingBagIcon} from "@heroicons/react/24/solid";

function Product({id, color, shadow, title, 
text, img, btn, rating, price }) {

  return (
    <>
    <div>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <div>
          <div>{price}</div>
          <div>
            <StarIcon className='icon-style text-slate-900' />
            {rating}</div>
        </div>
        <div>
        <button type='button' className=''>
          <ShoppingBagIcon className='icon-style text-slate-900'/></button>
          <button type='button' className=''>{btn}</button>
      </div>
      </div>
      
      {/*Image */}

      <div>
        <img 
       src={img} alt="item/img" />
      </div>
    </div>
    </>
  )
}

export default Product