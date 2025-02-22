// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AppContainer = styled.div`
  background: #f8f9fa;
  min-height: 100vh;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 5%;
  max-width: 1600px;
  margin: 0 auto;
  animation: ${fadeIn} 0.8s ease-out;
`;

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error:', err));
  }, []);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  return (
    <AppContainer>
      <Header cartCount={cartItems.length} />
      <Hero 
        title="Premium Artisan Meals"
        subtitle="Crafted by Master Chefs"
        bgImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
      />
      
      <ProductGrid>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </ProductGrid>
    </AppContainer>
  );
};

export default App;
