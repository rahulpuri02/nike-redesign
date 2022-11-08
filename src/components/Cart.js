import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart, selectCartState } from '../redux/CartSlice';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';

function Cart() {
  
  const dispatch = useDispatch();
  const cartState = useSelector(selectCartState);

  const backToHome = () => {
    dispatch(
      closeCart({
        cartState: false,
      })
    );
  };

  return (
    <div className={`fixed top-0 left-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[200]
    ${cartState
      ? "opacity-100 visible translate-x-0"
      : "opacity-0 invisible translate-x-8"}`}>
      <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
        <CartCount backToHome={backToHome}/>
        <CartEmpty/>
        <CartItem/>
      </div>
    </div>
  )
}

export default Cart