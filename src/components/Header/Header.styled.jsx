import { styled } from 'styled-components';

export const HeaderForm = styled.header`
  position: fixed;
  top: 0;
  width: 360px;
  height: 50px;
  margin-top: 36px;
  z-index: 2000;
  display: flex;
  justify-content: space-between;

  &.active {
    background: rgba(23, 61, 51, 0.75);
    backdrop-filter: blur(12.5px);
  }

  @media (min-width: 767px) {
    width: 768px;
  }

  @media (min-width: 1279px) {
    width: 1280px;
  }
`;

export const HeaderContainer = styled.div`
  display: inline-flex;
`;

export const BurgerMenuWrap = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 500px;
  background: #dcefd8;

  margin-top: 5px;
`;

export const BurgerMenuBtn = styled.svg`
  position: relative;
  top: 9px;
  left: 10px;
  cursor: pointer;
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  margin-top: 36px;
  margin-left: 20px;

  display: flex;
  flex-direction: column;

  width: 320px;
  height: 568px;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);

  backdrop-filter: blur(12.5px);

  z-index: 2;
`;

export const MobileMenuContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const MenuWrap = styled.div`
  position: relative;
  top: 20px;
  left: 15px;
  display: flex;
  margin-bottom: 25px;

  &:after {
    content: '';
    position: absolute;
    top: 29px;
    left: 7px;
    width: 272px;
    height: 1px;
    background: #fff;
  }
`;

export const CrossText = styled.p`
  position: absolute;
  top: 2px;
  left: 23px;

  color: #fff;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MobileMenuCloseBtn = styled.svg`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const LinkSocial = styled.ul`
  display: flex;
  position: relative;
  top: 35%;
  left: 20px;
`;

export const LinkSocialItems = styled.li`
  margin-right: 8px;

  &:nth-last-child(1) {
    margin-right: 0px;
  }
`;

export const SocialLinkSvg = styled.svg`
  width: 30px;
  height: 30px;
`;

export const SocialLink = styled.a``;

export const WrapBtn = styled.div`
  display: flex;
  gap: 12px;
`;

export const GetInTouch = styled.a`
  display: none;

  color: #173d33;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 767px) {
    display: inline-flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 500px;
    background: #97d28b;
  }
`;
