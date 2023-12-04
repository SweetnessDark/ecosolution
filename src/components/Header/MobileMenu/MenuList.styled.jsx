import { styled } from 'styled-components';

export const MobileMenuList = styled.nav`
  margin-left: 22px;
`;

export const MobileMenuListItems = styled.ul``;

export const MobileMenuItems = styled.li`
  margin-bottom: 8px;

  &:nth-last-child(1) {
    margin-bottom: 0px;
  }

  &:after {
    content: '';
    width: 1px;
    height: 1px;
    transform: rotate(25deg);
  }
`;

export const ItemsLink = styled.a`
  position: relative;
  color: #fff;
  stroke: #fff;
  font-family: Fira Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;

  transition: all 250ms linear;

  &:hover {
    color: #97d28b;
    stroke: #97d28b;
  }
`;

export const ArrowRight = styled.svg`
  width: 35px;
  height: 35px;
  position: absolute;
  margin-left: 10px;
  margin-top: 5px;
`;
