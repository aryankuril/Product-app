import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartButton = () => {
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cartData.length);
  }, []);

  
  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <button
      onClick={goToCart}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        fontSize: '16px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      🛒
      {cartCount > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            background: '#ff0000',
            color: '#fff',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            fontSize: '12px',
            lineHeight: '20px',
            textAlign: 'center',
          }}
        >
          {cartCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
