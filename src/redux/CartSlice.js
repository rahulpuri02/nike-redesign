import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    cartState: false,
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
    }
  }
});

export const {openCart, closeCart} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;

export default CartSlice.reducer;