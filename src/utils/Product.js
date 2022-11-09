import React from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addToCart, openCart } from "../redux/CartSlice";

function Product({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = { id, title, text, img, color, price, shadow };
    dispatch(addToCart(item));
  };

  const goToCart = () => {
    dispatch(openCart({
      cartState: true,
    }));
    }


  return (
    <>
      <div
        className={`relative gap-3 bg-gradient-to-b ${color} ${shadow}
    grid items-center ${
      ifExists ? "justify-items-start pb-7" : " justify-items-center"
    } rounded-xl py-4 px-5 transition-all duration-500 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={`grid items-center $${
            ifExists ? "justify-items-start" : " justify-items-center"
          }`}
        >
          <h1 className="text-xl lg:text-lg md:text-base font-medium  text-slate-200 filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base  md:text-sm font-normal">
            {text}
          </p>

          <div className="flex items-center justify-between w-28 mb-2.5 mt-1.5">
            <div className="flex items-center bg-white/80 px-1 rounded">
              <h1 className="text-black text-sm font-medium blur-effect-theme">
                ${price}
              </h1>
            </div>
            <div className="flex items-center justify-center gap-0.5">
              <StarIcon className="icon-style w-4 h-4" />
              <h1 className="text-sm font-normal text-slate-100">{rating}</h1>
            </div>
          </div>

          {/* Button */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-slate-200"
            >
              <ShoppingBagIcon 
              onClick={handleAddToCart}
              className="icon-style text-slate-900" />
            </button>
            <button
              onClick={() => {handleAddToCart(); goToCart();}}
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-1 shadow shadow-slate-200 text-sm text-black"
            >
              {btn}
            </button>
          </div>
        </div>

        {/*Image */}

        <div
          className={`flex items-center
      ${ifExists ? "absolute top-5 right-1" : "justify-center"}`}
        >
          <img
            className={`${
              ifExists
                ? "h-auto w-64 lg:w-56 md:w-48 transitions-theme -rotate-[35deg] hover:rotate-[0deg]"
                : "h-36 w-64 transitions-theme hover:-rotate-12"
            }`}
            src={img}
            alt={title}
          />
        </div>
      </div>
    </>
  );
}

export default Product;
