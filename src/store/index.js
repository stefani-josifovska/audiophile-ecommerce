import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import menuSlice from './menuSlice';

const store = configureStore({
    reducer: { menu: menuSlice.reducer, cart: cartSlice.reducer }
});

export default store;