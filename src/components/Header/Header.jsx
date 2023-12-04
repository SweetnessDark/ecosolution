import { useEffect, useState } from 'react';
import {
  HeaderContainer,
  HeaderForm,
  BurgerMenuWrap,
  BurgerMenuBtn,
  MobileMenu,
  MobileMenuContainer,
  MenuWrap,
  MobileMenuCloseBtn,
  CrossText,
  LinkSocial,
  LinkSocialItems,
  SocialLink,
  SocialLinkSvg,
  GetInTouch,
  WrapBtn,
} from './Header.styled';
import iconsSvg from '../../assets/Icons/icons.svg';
import Logo from './Logo/Logo';
import MenuList from './MobileMenu/MenuList';
import { Container } from 'utils/Container.styled';
import { BlackCircle } from 'components/FAQ/FAQ.styled';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.pageYOffset > 50) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <HeaderForm className="header">
        {!isMobileMenuOpen && (
          <HeaderContainer>
            <Logo />
          </HeaderContainer>
        )}

        {isMobileMenuOpen && (
          <MobileMenu>
            <MobileMenuContainer>
              <MenuWrap>
                <MobileMenuCloseBtn onClick={() => setIsMobileMenuOpen(false)}>
                  <use href={iconsSvg + '#cross'} />
                </MobileMenuCloseBtn>
                <CrossText>close</CrossText>
              </MenuWrap>

              <MenuList />

              <LinkSocial>
                <LinkSocialItems>
                  <SocialLink href="/">
                    <SocialLinkSvg>
                      <use href={iconsSvg + '#facebook'} />
                    </SocialLinkSvg>
                  </SocialLink>
                </LinkSocialItems>
                <LinkSocialItems>
                  <SocialLink href="/">
                    <SocialLinkSvg>
                      <use href={iconsSvg + '#instagram'} />
                    </SocialLinkSvg>
                  </SocialLink>
                </LinkSocialItems>
              </LinkSocial>
            </MobileMenuContainer>
          </MobileMenu>
        )}

        {!isMobileMenuOpen && (
          <WrapBtn>
            <BurgerMenuWrap>
              <BurgerMenuBtn onClick={() => setIsMobileMenuOpen(true)}>
                <use href={iconsSvg + '#menu-hamburger'} />
              </BurgerMenuBtn>
            </BurgerMenuWrap>
            <Link
              to="contact-us"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <GetInTouch>
                Get in touch
                <BlackCircle />
              </GetInTouch>
            </Link>
          </WrapBtn>
        )}
      </HeaderForm>
    </Container>
  );
};

export default Header;
