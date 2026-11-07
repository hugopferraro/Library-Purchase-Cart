import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Book, CartItem } from '../types/book';

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Book>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) existingItem.quantity += 1;
      else state.items.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload.id);
      if (!item) return;
      if (action.payload.quantity <= 0) {
        state.items = state.items.filter((cartItem) => cartItem.id !== action.payload.id);
      } else {
        item.quantity = Math.min(action.payload.quantity, 10);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, setQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
