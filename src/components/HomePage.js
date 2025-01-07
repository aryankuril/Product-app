import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => setProducts(response.data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px' }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          <img src={product.thumbnail} alt={product.title} style={{ width: '100%', borderRadius: '4px' }} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'blue' }}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
