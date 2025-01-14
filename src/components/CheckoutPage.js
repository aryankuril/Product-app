import React, { useState } from 'react';

const CheckoutPage = () => {
  const [form, setForm] = useState({
    name: '',
    number: '',
    street: '',
    city: '',
    state: ''
  });

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
  
    if (!form.name || !form.number || !form.street || !form.city || !form.state) {
      alert('Please fill all the fields before checking out.');
      return;
    }

    const message = `
      *Order Confirmation*
      ---------------------
      *Customer Details:*
      Name: ${form.name}
      Phone: ${form.number}
      Address: ${form.street}, ${form.city}, ${form.state}
  
      *Cart Items:*
      ${cart.map((item, index) => `${index + 1}. ${item.title} - $${item.price}`).join('\n')}
  
      *Total Amount:*
      $${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
    `;

    const userNumber = form.number.replace(/\D/g, '');
    const whatsappURL = `https://wa.me/${userNumber}?text=${encodeURIComponent(message)}`;
  
   
    console.log('WhatsApp URL:', whatsappURL);
  

    try {
      window.open(whatsappURL, '_blank');
    //   setShowPopup(true);
  
      localStorage.removeItem('cart');
    } catch (error) {
      alert('Failed to open WhatsApp. Please try again.');
      console.error('Error opening WhatsApp:', error);
    }
  };
  

  return (
    <div style={{ padding: '20px' }}>
      <h1>Checkout</h1>
      <form style={{ display: 'grid', gap: '10px' }}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="number" placeholder="Phone Number" onChange={handleChange} />
        <input name="street" placeholder="Street Address" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />
        <input name="state" placeholder="State" onChange={handleChange} />
      </form>
      <button onClick={handleCheckout} style={{ marginTop: '20px', padding: '10px 20px', background: 'blue', color: 'white', borderRadius: '5px' }}>Checkout</button>
    </div>
  );
};

export default CheckoutPage;
