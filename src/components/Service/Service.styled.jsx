import { styled } from 'styled-components';

export const Selector = styled.div`
  position: relative;
  top: 255px;
  z-index: 1;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 767px) {
    top: 355px;
  }
  @media (min-width: 1279px) {
    top: 369px;
  }
`;

export const WrapContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 767px) {
    display: block;
  }
`;

export const WrapHeadings = styled.div`
  width: 152px;

  @media (min-width: 767px) {
    width: 186px;
    margin: 0 auto;
  }
  @media (min-width: 1279px) {
    width: 248px;
  }
`;

export const HeadingsService = styled.h2`
  color: #173d33;
  text-align: center;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 100% */
  text-transform: uppercase;

  @media (min-width: 767px) {
    font-size: 36px;
    line-height: 36px; /* 100% */
  }
  @media (min-width: 1279px) {
    font-size: 48px;
    line-height: 48px; /* 100% */
  }
`;

export const WrapService = styled.div`
  margin-top: 24px;
  @media (min-width: 767px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-left: 19px;
    margin-right: 30px;
  }
  @media (min-width: 1279px) {
    margin-left: 35px;
    margin-right: 100px;
    margin-top: 120px;
  }
`;

export const WrapTextService = styled.div`
  width: 320px;
  height: 320px;
  background: #eaedf1;

  @media (min-width: 767px) {
    width: 342px;
    height: 342px;
  }
  @media (min-width: 1279px) {
    width: 596px;
    height: 596px;
  }
`;

export const TextService = styled.p`
  width: 284px;

  color: #173d33;
  font-family: Oswald;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 100% */
  text-transform: uppercase;

  padding-top: 52px;
  padding-left: 18px;

  @media (min-width: 767px) {
    padding-top: 51px;
    padding-left: 29px;
    font-size: 40px;
    line-height: 40px; /* 100% */
  }
  @media (min-width: 1279px) {
    width: 452px;
    padding: 106px 72px;
    font-size: 64px;
    line-height: 64px; /* 100% */
  }
`;

export const WrapItemsService = styled.div`
  position: relative;
  @media (min-width: 767px) {
    margin-left: 154px;
    margin-top: 67px;
  }
  @media (min-width: 1279px) {
    margin-left: 20%;
    margin-top: 20%;
  }
`;

export const ItemsServices = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

export const ItemService = styled.li``;

export const ItemServiceLink = styled.a`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`;

export const BgService = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 35px;
  left: 1%;

  @media (min-width: 767px) {
    bottom: 107px;
    left: -170%;
  }
  @media (min-width: 1279px) {
    bottom: 60%;
    left: -163%;
  }
`;
