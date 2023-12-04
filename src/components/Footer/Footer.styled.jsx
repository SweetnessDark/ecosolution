import { styled } from 'styled-components';

export const FooterStyle = styled.footer`
  position: relative;
  top: 255px;
  z-index: 1;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  padding-top: 40px;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #97d28b;
    position: absolute;
  }
  @media (min-width: 767px) {
    top: 450px;
  }
`;

export const WrapOneChapter = styled.div``;

export const WrapTwoChapter = styled.div`
  @media (min-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const WrapFooterBackToTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapSocialLink = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const SocialLinkSvg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const WrapContactFooter = styled.div`
  text-align: center;
  @media (min-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ContactFooter = styled.p`
  margin-bottom: 16px;
  @media (min-width: 767px) {
    margin-right: 77px;
    &:nth-last-child(1) {
      margin-right: 0px;
    }
  }
`;

export const Copyright = styled.p`
  text-align: center;
`;
