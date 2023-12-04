import { Link } from 'react-scroll';
import iconsSvg from '../../../assets/Icons/icons.svg';
import {
  MobileMenuList,
  MobileMenuItems,
  ArrowRight,
  MobileMenuListItems,
  ItemsLink,
} from './MenuList.styled';

const MenuList = () => {
  return (
    <MobileMenuList>
      <MobileMenuListItems>
        <MobileMenuItems>
          <Link to="main" spy={true} smooth={true} offset={50} duration={500}>
            <ItemsLink>
              Main
              <ArrowRight>
                <use href={iconsSvg + '#arrow-right'} />
              </ArrowRight>
            </ItemsLink>
          </Link>
        </MobileMenuItems>
        <MobileMenuItems>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <ItemsLink href="#">
              About
              <ArrowRight>
                <use href={iconsSvg + '#arrow-right'} />
              </ArrowRight>
            </ItemsLink>
          </Link>
        </MobileMenuItems>
        <MobileMenuItems>
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <ItemsLink href="#">
              Service
              <ArrowRight>
                <use href={iconsSvg + '#arrow-right'} />
              </ArrowRight>
            </ItemsLink>
          </Link>
        </MobileMenuItems>
        <MobileMenuItems>
          <Link to="cases" spy={true} smooth={true} offset={50} duration={500}>
            <ItemsLink href="#">
              Cases
              <ArrowRight>
                <use href={iconsSvg + '#arrow-right'} />
              </ArrowRight>
            </ItemsLink>
          </Link>
        </MobileMenuItems>
        <MobileMenuItems>
          <Link to="faq" spy={true} smooth={true} offset={50} duration={500}>
            <ItemsLink href="#">
              FAQ
              <ArrowRight>
                <use href={iconsSvg + '#arrow-right'} />
              </ArrowRight>
            </ItemsLink>
          </Link>
        </MobileMenuItems>
        <MobileMenuItems>
          <Link
            to="customers"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <ItemsLink href="#">
              Customers
              <ArrowRight>
                <use href={iconsSvg + '#arrow-right'} />
              </ArrowRight>
            </ItemsLink>
          </Link>
        </MobileMenuItems>
        <MobileMenuItems>
          <Link
            to="contact-us"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <ItemsLink href="#">
              Contact Us
              <ArrowRight>
                <use href={iconsSvg + '#arrow-right'} />
              </ArrowRight>
            </ItemsLink>
          </Link>
        </MobileMenuItems>
      </MobileMenuListItems>
    </MobileMenuList>
  );
};

export default MenuList;
