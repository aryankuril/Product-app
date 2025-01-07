import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <img src={product.thumbnail} alt={product.title} style={{ width: '300px', borderRadius: '4px' }} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
    </div>
  );
};

export default ProductDetails;
