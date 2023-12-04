import Logo from 'components/Header/Logo/Logo';
import { Container } from 'utils/Container.styled';
import BackToTop from './BackToTop/BackToTop';
import {
  ContactFooter,
  Copyright,
  FooterStyle,
  SocialLinkSvg,
  WrapContactFooter,
  WrapFooterBackToTop,
  WrapOneChapter,
  WrapSocialLink,
  WrapTwoChapter,
} from './Footer.styled';

import iconsSvg from '../../assets/Icons/icons.svg';

const Footer = () => {
  return (
    <Container>
      <FooterStyle>
        <WrapOneChapter>
          <WrapFooterBackToTop>
            <Logo />
            <BackToTop />
          </WrapFooterBackToTop>
          <WrapSocialLink>
            <SocialLinkSvg>
              <use href={iconsSvg + '#black-facebook'} />
            </SocialLinkSvg>
            <SocialLinkSvg>
              <use href={iconsSvg + '#black-instagram'} />
            </SocialLinkSvg>
          </WrapSocialLink>
        </WrapOneChapter>
        <WrapTwoChapter>
          <WrapContactFooter>
            <ContactFooter>
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </ContactFooter>
            <ContactFooter>office@ecosolution.com</ContactFooter>
          </WrapContactFooter>
          <Copyright>ecosolution © 2023</Copyright>
        </WrapTwoChapter>
      </FooterStyle>
    </Container>
  );
};

export default Footer;
