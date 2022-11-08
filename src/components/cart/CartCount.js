import React from 'react'
import { ChevronDoubleLeftIcon, XMarkIcon} from "@heroicons/react/24/solid";

function CartCount() {
  return (
    <>
    <div className='bg-white h-11 flex items-center justify-between px-3 fixed top-0 left-0 right-0 w-full '>
        <div className='flex items-center gap-2.5'>
            <div className='grid items-center cursor-pointer'>
            <ChevronDoubleLeftIcon 
            className='h-5 w-5 text-slate-900 hover:text-orange-500 stroke-[2]'/></div>
            <div className='grid items-center cursor-pointer'>
                <h1 className='text-base font-normal text-slate-900'>Your Cart <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 mx-2 text-sm'>(2 Items)</span></h1>
            </div>
        </div>

        <div className='flex items-center '>
            <div>
        <button className='rounded bg-theme-cart active:scale-90 p-[1px]' type="button">
            <XMarkIcon className="h-5 w-5 text-white" />
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default CartCount