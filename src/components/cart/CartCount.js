import React from 'react'
import { ChevronDoubleLeftIcon, XMarkIcon} from "@heroicons/react/24/solid";


function CartCount({backToHome, handleClearCart, cartTotalQuantity }) {



  return (
    <div className='relative'>
    <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full '>
        <div className='flex items-center gap-2.5'>
            <div onClick={backToHome} className='grid items-center cursor-pointer'>
            <ChevronDoubleLeftIcon 
            className='h-5 w-5 text-slate-900 hover:text-orange-500 stroke-[2]'/></div>
            <div className='grid items-center cursor-pointer'>
                <h1 className='text-base font-normal text-slate-900'>Your Cart <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 mx-2 text-sm'>({cartTotalQuantity} Items)</span></h1>
            </div>
        </div>

        <div className='flex items-center '>
            <div>
        <button
        className='rounded bg-theme-cart active:scale-90 p-[1px]' type="button">
            <XMarkIcon 
            onClick={handleClearCart}
            className="h-5 w-5 text-white" />
                </button>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default CartCount