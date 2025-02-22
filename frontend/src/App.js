import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>🍔 Cherie</h1>
        <nav style={styles.nav}>
          <button style={styles.cartButton}>Cart (0)</button>
        </nav>
      </header>

      <div style={styles.hero}>
        <h2 style={styles.heroText}>Premium Meals Delivered</h2>
      </div>

      <div style={styles.productGrid}>
        {products.map(product => (
          <div key={product.id} style={styles.productCard}>
            <div 
              style={{...styles.productImage, backgroundImage: `url(${product.image})`}}
            ></div>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>${product.price}</p>
            <button style={styles.addButton}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: 1200, margin: '0 auto' },
  header: { 
    display: 'flex', 
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  logo: { color: '#e74c3c', fontSize: '1.8rem' },
  hero: {
    height: '300px',
    background: 'linear-gradient(rgba(0,0,0,0.4), url(https://images.unsplash.com/photo-1504674900247-0877df9cc836)',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2rem'
  },
  heroText: { color: 'white', fontSize: '2.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '2rem',
    padding: '0 2rem'
  },
  productCard: {
    background: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    ':hover': { transform: 'translateY(-5px)' }
  },
  productImage: {
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  productName: { padding: '1rem', fontSize: '1.1rem' },
  productPrice: { padding: '0 1rem', color: '#e74c3c', fontWeight: '600' },
  addButton: {
    display: 'block',
    width: '100%',
    padding: '1rem',
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    ':hover': { background: '#c0392b' }
  },
  cartButton: {
    padding: '0.8rem 1.5rem',
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default App;
