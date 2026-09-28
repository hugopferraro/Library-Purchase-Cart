import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <p>
        <Link to="/">Back to Products</Link>
      </p>
    </div>
  );
};

export default Cart;
