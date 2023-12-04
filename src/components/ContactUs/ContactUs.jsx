import {
  Contact,
  ContactEmail,
  ContactItems,
  ContactMap,
  ContactPhone,
  ContactSocialNet,
  ContactSvg,
  ContactText,
  HeadingContactUs,
  Selector,
  WrapContactNet,
  WrapContactUsForm,
} from './ContactUs.styled';
import { Container } from './../../utils/Container.styled';
import { ContactUsForm } from './ContactUsForm/ContactUsForm';

import iconsSvg from '../../assets/Icons/icons.svg';

const ContactUs = () => {
  return (
    <Selector name="contact-us">
      <Container>
        <HeadingContactUs>Contact us</HeadingContactUs>
        <WrapContactUsForm>
          <Contact>
            <ContactItems>
              <ContactText>Phone:</ContactText>
              <ContactPhone>
                <ContactSvg>
                  <use href={iconsSvg + '#call'} />
                </ContactSvg>
                38 (098) 12 34 567
              </ContactPhone>
              <ContactPhone>
                <ContactSvg>
                  <use href={iconsSvg + '#call'} />
                </ContactSvg>
                38 (098) 12 34 567
              </ContactPhone>
            </ContactItems>
            <ContactItems>
              <ContactText>E-mail:</ContactText>
              <ContactEmail>
                <ContactSvg>
                  <use href={iconsSvg + '#sms'} />
                </ContactSvg>
                office@ecosolution.com
              </ContactEmail>
            </ContactItems>
            <ContactItems>
              <ContactText>Address:</ContactText>
              <ContactMap>
                <ContactSvg>
                  <use href={iconsSvg + '#map'} />
                </ContactSvg>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </ContactMap>
            </ContactItems>
            <ContactItems>
              <ContactText>Social Networks:</ContactText>
              <WrapContactNet>
                <ContactSocialNet>
                  <use href={iconsSvg + '#black-facebook'} />
                </ContactSocialNet>
                <ContactSocialNet>
                  <use href={iconsSvg + '#black-instagram'} />
                </ContactSocialNet>
              </WrapContactNet>
            </ContactItems>
          </Contact>
          <ContactUsForm />
        </WrapContactUsForm>
      </Container>
    </Selector>
  );
};

export default ContactUs;
