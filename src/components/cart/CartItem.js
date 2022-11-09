import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { removeFromCart, increaseCartQuantity, decreaseCartQuantity, } from "../../redux/CartSlice";


function CartItem({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) {
 
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({id, title, text, img, color, shadow, price, cartQuantity }));
  }

  const handleIncreasedCartQuantity = () => {
    dispatch(increaseCartQuantity({id, title, text, img, color, shadow, price, cartQuantity }));
  }

  const handleDecreasedCartQuantity = () => {
    dispatch(decreaseCartQuantity({id, title, text, img, color, shadow, price, cartQuantity }));
  }

  return (
    <>
      <div className='flex items-center justify-between w-full'>
        {/* Product Details */}
        <div className='flex items-center gap-5'>
          <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-700 ease-in-out grid items-center`}>
            <img className="w-36 h-auto object-fill lg:w-28" src={img} alt={title} />
            <div className='absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded'>
            ${price}
          </div>
          </div>        
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none" >
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">{title}</h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div 
          
            className="flex items-center justify-around w-full ">
              <button 
              onClick={handleDecreasedCartQuantity}
              className='bg-theme-cart rounded h-6 w-6 lg:w-5 lg:h-5 flex items-center justify-center hover:scale-90' type="button">
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div className="bg-theme-cart rounded text-white font-medium lg:text-sm w-7 h-6 lg:h-6 lg:w-6 flex items-center justify-center">{cartQuantity}</div>
              <button
              onClick={handleIncreasedCartQuantity}
               className='bg-theme-cart rounded h-6 w-6 lg:w-5 lg:h-5 flex items-center justify-center hover:scale-90' type="button">
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Total Price & Delete */}
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-items-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">${price * cartQuantity}</h1>
          </div>
          <div className="grid items-center justify-items-center">
            <button className='bg-theme-cart rounded text-white p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer' type="button">
              <TrashIcon
              onClick={handleRemoveFromCart}
              className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
