// components/Hero.js
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 70vh;
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
    url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const CTAButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #c0392b;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

const Hero = ({ title, subtitle, bgImage }) => {
  return (
    <HeroSection bgImage={bgImage}>
      <HeroContent>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <CTAButton>Explore Menu →</CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
