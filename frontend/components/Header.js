// components/Header.js
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
`;

const Nav = styled.nav`
  max-width: 1600px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #e74c3c;
  
  span {
    color: #2d3436;
  }
`;

const CartButton = styled.button`
  background: none;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  background: #e74c3c;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #c0392b;
    transform: translateY(-2px);
  }
`;

const Header = ({ cartCount }) => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <span>Cherie</span>🍴
        </Logo>
        <CartButton>
          Cart ({cartCount})
        </CartButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
