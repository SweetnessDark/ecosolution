import { styled } from 'styled-components';

export const Selector = styled.div`
  position: relative;
  top: 246px;
  z-index: 1;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 767px) {
    top: 350px;
  }
  @media (min-width: 1279px) {
    top: 374px;
  }
`;

export const WrapAboutText = styled.div`
@media (min-width: 767px) {
  display: flex;
  justify-content: space-between;

  &:after {
    content: '';
    width: 1px;
    height: 110px;
    background: #97d28b;
    position: absolute;
    right: 50%;
  }
}
}
`;

export const AboutHeadings = styled.h2`
  color: #173d33;

  font-family: Oswald;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;

  margin-bottom: 24px;

  @media (min-width: 767px) {
    width: 272px;
  }
  @media (min-width: 1279px) {
    font-size: 48px;
  }
`;

export const AboutText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 767px) {
    width: 342px;
  }
`;

export const Card = styled.ul`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 24px;
  margin: 36px 20px;

  @media (min-width: 767px) {
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  }
`;

export const CardItems = styled.li`
  width: 148px;
  height: 197px;
  flex-shrink: 0;
  background: #eaedf1;
`;

export const WrapItemValueSvg = styled.div`
  display: flex;
  margin-top: 14px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 60px;
    left: 12px;
    width: 124px;
    height: 1px;
    background: #97d28b;
  }
`;

export const ItemValueSvg = styled.svg`
  width: 16px;
  height: 16px;
  margin-top: 3px;
  margin-right: 4px;
  margin-left: 12px;
`;

export const ItemValues = styled.h3`
  color: #173d33;
  font-family: Oswald;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
`;

export const ItemAboutValues = styled.p`
  width: 124px;

  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  margin-top: 46px;
  margin-left: 12px;
`;

export const AboutImg = styled.img`
  display: none;
  @media (min-width: 767px) {
    display: block;
    width: 346px;
    height: 200px;
  }
`;

export const HeadingsElectricity = styled.h2`
  color: #173d33;
  text-align: center;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 100% */
  text-transform: uppercase;

  @media (min-width: 767px) {
    width: 368px;
    margin: 100px auto 0;
  }
  @media (min-width: 1279px) {
    width: 491px;
    margin: 121px auto 0;
  }
`;

export const WrapElectricity = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 48px;
    background: #97d28b;
    margin: 0 auto;

    @media (min-width: 767px) {
      height: 87px;
    }
  }
  &:before {
    content: '';
    display: block;
    width: 1px;
    height: 48px;
    background: #97d28b;
    margin: 0 auto;
    @media (min-width: 767px) {
      height: 87px;
    }
  }
`;

export const ElectricityForAllTime = styled.h2`
  display: flex;
  justify-content: center;
  color: #97d28b;
  font-family: Oswald;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 100% */
  text-transform: uppercase;
  margin-top: 24px;
  margin-bottom: 24px;

  @media (min-width: 767px) {
    font-size: 100px;
    line-height: 100px; /* 100% */
  }
  @media (min-width: 1279px) {
    font-size: 164px;
    line-height: 164px; /* 100% */
  }
`;

export const UnitElectricity = styled.p`
  color: #173d33;
  font-family: Oswald;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 100% */
  margin-top: 10px;
  margin-left: 8px;

  @media (min-width: 767px) {
    font-size: 28px;
    margin-top: 35px;
    margin-left: 24px;
  }
  @media (min-width: 1279px) {
    font-size: 48px;
  }
`;
