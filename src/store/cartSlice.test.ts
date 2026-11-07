import { describe, expect, it } from 'vitest';
import { books } from '../data/books';
import reducer, { addToCart, clearCart, removeFromCart, setQuantity } from './cartSlice';

describe('cartSlice', () => {
  it('adiciona um livro e aumenta sua quantidade sem duplicá-lo', () => {
    const once = reducer(undefined, addToCart(books[0]));
    const twice = reducer(once, addToCart(books[0]));

    expect(twice.items).toHaveLength(1);
    expect(twice.items[0].quantity).toBe(2);
  });

  it('atualiza a quantidade e limita o máximo a dez', () => {
    const state = reducer(undefined, addToCart(books[0]));
    const updated = reducer(state, setQuantity({ id: books[0].id, quantity: 99 }));

    expect(updated.items[0].quantity).toBe(10);
  });

  it('remove um item ao definir quantidade zero', () => {
    const state = reducer(undefined, addToCart(books[0]));
    const updated = reducer(state, setQuantity({ id: books[0].id, quantity: 0 }));

    expect(updated.items).toHaveLength(0);
  });

  it('remove um livro e esvazia o carrinho', () => {
    let state = reducer(undefined, addToCart(books[0]));
    state = reducer(state, addToCart(books[1]));
    state = reducer(state, removeFromCart(books[0].id));
    expect(state.items.map((item) => item.id)).toEqual([books[1].id]);
    expect(reducer(state, clearCart()).items).toEqual([]);
  });
});
