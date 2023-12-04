import { styled } from 'styled-components';

export const Selector = styled.div`
  position: relative;
  top: 255px;
  z-index: 1;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 36px;

  @media (min-width: 767px) {
    top: 350px;
  }
  @media (min-width: 1279px) {
    top: 374px;
  }
`;

export const HeadingCustomers = styled.h2`
  width: 229px;
  color: #173d33;
  text-align: center;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 100% */
  text-transform: uppercase;

  margin: 0 auto;

  @media (min-width: 767px) {
    font-size: 36px;
    line-height: 36px; /* 100% */
  }
  @media (min-width: 1279px) {
    font-size: 48px;
    line-height: 48px; /* 100% */
  }
`;

export const WrapCustomersItems = styled.ul`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  grid-auto-flow: row dense;
  gap: 16px;
  margin-top: 24px;
  @media (min-width: 767px) {
    grid-template: repeat(1, 1fr) / repeat(4, 1fr);
    margin-top: 40px;
  }
  @media (min-width: 767px) {
    grid-template: repeat(1, 1fr) / repeat(4, 1fr);
    margin-top: 93px;
  }
`;

export const CustomersItems = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 172px;
  height: 137px;
  background: #eaedf1;

  @media (min-width: 1279px) {
    width: 274px;
    height: 136px;
  }
`;

export const AboutCustomers = styled.p`
  position: absolute;
  top: 16px;
  left: 16px;

  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const ImgCustomers = styled.img``;
