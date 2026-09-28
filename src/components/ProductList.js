import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
      <p>
        <Link to="/cart">View Cart</Link>
      </p>
    </div>
  );
};

export default ProductList;
