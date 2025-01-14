import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(product => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(product => (
            <div key={product.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
          <Link to="/checkout" style={{ textDecoration: 'none', padding: '10px 20px', background: 'green', color: 'white', borderRadius: '5px' }}>Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
