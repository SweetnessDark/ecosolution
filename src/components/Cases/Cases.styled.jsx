import { styled } from 'styled-components';

export const Selector = styled.div`
  position: relative;
  top: 255px;
  z-index: 1;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;

export const HeadingsCases = styled.h2`
  width: 264px;

  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 100% */
  text-transform: uppercase;

  margin-top: 36px;

  @media (min-width: 767px) {
    margin-top: 150px;

    &:after {
      content: '';
      width: 1px;
      height: 65px;
      background: #97d28b;
      position: absolute;
      right: 50%;
      top: 0;
    }
  }
  @media (min-width: 1279px) {
    width: 398px;
    margin-top: 170px;
  }
`;
