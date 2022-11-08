import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const  initialState = {
    cartState: false,
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem
      ("cart")) : [],
}

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    openCart: (state, action) => {
    state.cartState = action.payload.cartState;

    },
    closeCart: (state, action) => {
    state.cartState = action.payload.cartState;
    },
    addToCart: (state, action) => {
       const itemIndex = state.cartItems.findIndex((item) => 
       item.id === action.payload.id);

       if(itemIndex >= 0){
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success(`${action.payload.title} quantity is increased to ${state.cartItems[itemIndex].cartQuantity} times!`);

       }else{
        const tempProduct = {...action.payload, cartQuantity: 1};
        state.cartItems.push(tempProduct);
        
        toast.success(`${action.payload.title} is added to cart`);
       }
       
       localStorage.setItem("cart", JSON.stringify(state.cartItems));
        
    }
  },
});

export const {openCart, closeCart, addToCart} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;

export default CartSlice.reducer;