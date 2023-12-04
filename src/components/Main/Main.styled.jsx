import { styled } from 'styled-components';

export const Selector = styled.div`
  position: relative;
  top: 222px;
  z-index: 1;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ContainMain = styled.div`
  &:after {
    content: '';
    position: absolute;
    height: 1px;
    background: #97d28b;
    display: none;

    @media (min-width: 767px) {
      width: 767px;
      top: 190px;
      display: block;
    }
    @media (min-width: 1279px) {
      width: 1279px;
    }
  }
  @media (min-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const MainHeadings = styled.h1`
  color: #173d33;

  font-family: Oswald;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;

  margin-bottom: 24px;

  @media (min-width: 767px) {
    width: 301px;
    font-size: 48px;
  }
`;
export const MainHeadings2 = styled.h2`
  color: #173d33;

  font-family: Oswald;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;

  margin-bottom: 24px;

  @media (min-width: 767px) {
    width: 352px;
  }
  @media (min-width: 1279px) {
    width: 469px;
    font-size: 48px;
  }
`;

export const WrapMainTextLink = styled.div`
  @media (min-width: 767px) {
    width: 342px;
  }
  @media (min-width: 1279px) {
    width: 363px;
    margin-right: 96px;
  }
`;

export const MainText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  span {
    color: #97d28b;
  }

  @media (min-width: 767px) {
    width: 289px;
  }
`;

export const WrapLearnMore = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  @media (min-width: 767px) {
    justify-content: left;
  }

  &:after {
    content: '';
    position: absolute;
    top: 100px;
    width: 320px;
    height: 1px;
    background: #97d28b;

    @media (min-width: 767px) {
      display: none;
    }
  }
`;

export const LearnMore = styled.a`
  display: inline-flex;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 500px;
  border: 1px solid #97d28b;
  cursor: pointer;
  margin-top: 24px;

  color: #173d33;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 112.5% */
  letter-spacing: -0.64px;

  @media (min-width: 767px) {
    margin-top: 43px;
  }
`;

export const BtnLearnMore = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #97d28b;
`;

export const SvgArrowRight = styled.svg`
  width: 19px;
  height: 19px;
`;

export const WrapContacts = styled.div`
  text-align: center;
  margin-top: 49px;
  color: #173d33;

  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 767px) {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }
`;

export const Map = styled.p`
  margin-bottom: 8px;
`;

export const Email = styled.a`
  color: #173d33;
  @media (min-width: 767px) {
    margin-left: 12%;
  }
  @media (min-width: 1279px) {
    margin-left: 30%;
  }
`;

export const CopyrightMain = styled.p`
  display: none;
  @media (min-width: 767px) {
    display: block;
  }
`;

export const MainPhoto = styled.img`
  width: 360px;
  height: 200px;
  margin-top: 24px;
  @media (min-width: 767px) {
    width: 767px;
    height: 450px;
  }
  @media (min-width: 1279px) {
    width: 1279px;
    height: 700px;
  }
`;

export const WrapAboutMain = styled.div`
  margin-top: 24px;
  @media (min-width: 767px) {
    position: relative;
    margin-top: 80px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    &:after {
      content: '';
      width: 1px;
      height: 299px;
      background: #97d28b;
      position: absolute;
      right: 50%;
    }
  }
  @media (min-width: 1279px) {
    margin-top: 100px;
  }
`;

export const WrapPeople = styled.div`
  display: none;
  @media (min-width: 767px) {
    margin-top: 90px;
    display: block;
  }
  @media (min-width: 1279px) {
  }
`;

export const People = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

export const PeopleItem = styled.li``;

export const PeopleImg = styled.img`
  @media (min-width: 767px) {
    width: 159px;
    height: 168px;
  }
  @media (min-width: 1279px) {
    width: 274px;
    height: 290px;
  }
`;

export const NamePeople = styled.p`
  color: #173d33;
  font-family: Fira Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`;

export const SpacialPeople = styled.p`
  color: #828382;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;
