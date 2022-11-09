import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const  initialState = {
    cartState: false,
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem
      ("cart")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
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
    },

    removeFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      toast.success(`${action.payload.title} Removed From Cart`);
    },

    increaseCartQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success(`${action.payload.title} quantity increased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    decreaseCartQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.success(`${action.payload.title} quantity decreased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    clearCartItems: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    subtotal: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce((cartTotal, cartItem)=> {
        const { price, cartQuantity } = cartItem;
        const totalPrice = price * cartQuantity;

        cartTotal.totalAmount += totalPrice;
        cartTotal.totalQTY += cartQuantity;

        return cartTotal;
      }, {
        totalAmount: 0,
        totalQTY: 0,
      });

      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQTY;
    },

  },
});

export const {openCart, closeCart, addToCart, removeFromCart, increaseCartQuantity, decreaseCartQuantity, clearCartItems, subtotal} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalQuantity = (state) => state.cart.cartTotalQuantity;
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;

export default CartSlice.reducer;