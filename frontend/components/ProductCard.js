// components/ProductCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    
    .product-image {
      transform: scale(1.05);
    }
  }
`;

const ImageContainer = styled.div`
  height: 240px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(transparent, rgba(0,0,0,0.6));
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Badge = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  background: #e74c3c;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
`;

const ProductName = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #2d3436;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  color: #636e72;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const Price = styled.div`
  font-size: 1.4rem;
  color: #e74c3c;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const AddToCartButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  width: 100%;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #c0392b;
    transform: translateY(-2px);
  }
`;

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card>
      <ImageContainer>
        <ProductImage
          src={product.image || 'https://source.unsplash.com/random/800x600?food'}
          alt={product.name}
          className="product-image"
        />
        <Badge>Chef's Pick</Badge>
      </ImageContainer>
      
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>
          {product.description || 'Premium ingredients, expertly prepared'}
        </ProductDescription>
        <Price>${product.price.toFixed(2)}</Price>
        <AddToCartButton onClick={() => onAddToCart(product)}>
          Add to Cart 🛒
        </AddToCartButton>
      </ProductInfo>
    </Card>
  );
};

export default ProductCard;
