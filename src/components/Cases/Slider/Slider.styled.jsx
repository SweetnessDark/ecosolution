import { styled } from 'styled-components';

export const WrapSlider = styled.div`
  width: 320px;
  background: #eaedf1;
  margin-top: 100px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;

  // .swiper-free-mode > .swiper-wrapper {
  //   transition-timing-function: ease-out;
  //   margin: 0 auto;
  // }

  @media (min-width: 767px) {
    width: 100%;
  }
  @media (min-width: 1279px) {
    width: 100%;
  }

  .swiper {
    position: static;
  }

  .swiper-pagination {
    top: 25%;
    left: 20px;
    width: 53px;
    height: 30px;
    position: absolute;
    color: #173d33;
    text-align: justify;
    font-family: Fira Sans;
    font-size: 28px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -1.12px;
    @media (min-width: 767px) {
      top: 6%;
      left: 52%;
    }
    @media (min-width: 1279px) {
      top: 6%;
      left: 61%;
    }
  }

  .swiper-button-prev {
    border-radius: 100px;
    border: 1px solid #173d33;
    outline: none;
    text-indent: -9999px;
    display: block;
    position: absolute;
    z-index: 2;
    top: 21%;
    left: 51%;
    width: 66px;
    height: 66px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    cursor: pointer;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'%3e\ %3cpath d='M14.3545 8.89355L5.24949 17.9986L14.3545 27.1036' stroke='%23173D33' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e\ %3cpath d='M30.749 17.999H5.50402' stroke='%23173D33' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e\ %3c/svg%3e");
    @media (min-width: 767px) {
      top: 5%;
      left: 71%;
    }
    @media (min-width: 1279px) {
      top: 5%;
      left: 75%;
    }
  }

  .swiper-button-next {
    border-radius: 100px;
    border: 1px solid #173d33;
    outline: none;
    text-indent: -9999px;
    display: block;
    position: absolute;
    z-index: 3;
    top: 21%;
    right: 7%;
    width: 66px;
    height: 66px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    cursor: pointer;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.175 477.175'%3e\ %3cpath d='M21.6455 8.89355L30.7505 17.9986L21.6455 27.1036' stroke='%23173D33' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e\ %3cpath d='M5.25098 17.999H30.496' stroke='%23173D33' stroke-width='1.5' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3e\ %3c/svg%3e");
    @media (min-width: 767px) {
      top: 5%;
      right: 12%;
    }
    @media (min-width: 1279px) {
      top: 5%;
      right: 15%;
    }
  }
`;

export const Items = styled.div``;

export const ImgSlider = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const WrapAboutItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 26px;

  &:after {
    content: '';
    position: absolute;
    top: 90px;
    width: 296px;
    height: 1px;
    background: #97d28b;
  }
`;

export const AboutItem = styled.p`
  width: 175px;

  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
`;

export const SliderItemLink = styled.a`
  display: inline-flex;
  padding: 19px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  background: #97d28b;
`;

export const SliderLinkSvg = styled.svg`
  width: 28px;
  height: 28px;
`;

export const WrapQuoteItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
  margin-bottom: 12px;

  color: #173d33;
  font-family: Fira Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const QuoteItem = styled.p`
  margin-left: 12px;
`;

export const DateItem = styled.p`
  margin-right: 12px;
`;

export const ArrowsLeft = styled.div``;

export const ArrowsRight = styled.div``;
