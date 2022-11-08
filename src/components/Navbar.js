import React from 'react'
import {MagnifyingGlassIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png';
import { useDispatch } from 'react-redux';
import { openCart } from '../redux/CartSlice';
function Navbar() {

  const dispatch = useDispatch();

  const goToCart = () => {
  dispatch(openCart({
    cartState: true,
  }));
  }

  return (
    <>
    <header className="absolute top-7 left-0 right-0 opacity-100 z-50">
    <nav className='flex items-center justify-between nike-container'>
        <div className="flex items-center">
        <img
        className='w-16 h-auto'
        src={logo} alt="nike-logo" />
        </div>
        <ul className='flex justify-center gap-2'>
            <li className='grid items-center'><MagnifyingGlassIcon className='icon-style' /></li>
            <li className='grid items-center'><HeartIcon className='icon-style'/></li>
            <li className='grid items-center'><button type="button" className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
            <ShoppingBagIcon 
            onClick={goToCart}
            className='icon-style'/>
            <div className="cart-quantity">0</div>
            </button></li>
        </ul>
    </nav>
    </header>
    </>
  )
}

export default Navbar