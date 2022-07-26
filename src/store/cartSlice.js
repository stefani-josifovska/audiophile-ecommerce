import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartOpen: false,
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    totalPrice: +localStorage.getItem("totalPrice") || 0,
  },
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    closeCart(state) {
      state.isCartOpen = false;
    },
    addItemToCart(state, payload) {
      const id = payload.payload.productId;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (!existingItem) {
        state.cartItems.push({
          id: id,
          img: payload.payload.img,
          name: payload.payload.name,
          qty: payload.payload.qty,
          price: payload.payload.price,
        });
        state.totalPrice =
          state.totalPrice + payload.payload.price * payload.payload.qty;
      } else {
        const index = state.cartItems.findIndex(
          (item) => item === existingItem
        );
        state.cartItems[index] = {
          ...state.cartItems[index],
          qty: state.cartItems[index].qty + payload.payload.qty,
        };
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalPrice", state.totalPrice);
    },
    emptyCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalPrice", state.totalPrice);
    },
    changeQty(state, payload) {
      const index = state.cartItems.findIndex(
        (item) => item.id === payload.payload.id
      );
      if (payload.payload.action === "DECREASE") {
        state.totalPrice = state.totalPrice - state.cartItems[index].price;
        if (state.cartItems[index].qty === 1) {
          state.cartItems.splice(index, 1);
        } else {
          state.cartItems[index] = {
            ...state.cartItems[index],
            qty: state.cartItems[index].qty - 1,
          };
        }
      }
      if (payload.payload.action === "INCREASE") {
        state.cartItems[index] = {
          ...state.cartItems[index],
          qty: state.cartItems[index].qty + 1,
        };
        state.totalPrice = state.totalPrice + state.cartItems[index].price;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalPrice", state.totalPrice);
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
