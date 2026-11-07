import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { type CartState } from './cartSlice';

const STORAGE_KEY = 'estante-livre:cart';

const loadCart = (): CartState | undefined => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as CartState) : undefined;
  } catch {
    return undefined;
  }
};

export const createAppStore = (preloadedCart = loadCart()) =>
  configureStore({
    reducer: { cart: cartReducer },
    preloadedState: preloadedCart ? { cart: preloadedCart } : undefined,
  });

export const store = createAppStore();

store.subscribe(() => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState().cart));
  } catch {
    // The application remains usable when storage is unavailable.
  }
});

export type AppStore = ReturnType<typeof createAppStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
