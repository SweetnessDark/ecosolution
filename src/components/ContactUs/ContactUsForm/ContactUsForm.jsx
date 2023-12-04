import { ContactText } from '../ContactUs.styled';
import {
  ArrowBtn,
  BtnForm,
  Fieldset,
  Form,
  Input,
  WrapForm,
} from './ContactUsForm.styled';

import iconsSvg from '../../../assets/Icons/icons.svg';

export const ContactUsForm = () => {
  return (
    <Form class="form">
      <Fieldset>
        <WrapForm className="name">
          <ContactText>Full name:</ContactText>
          <Input type="text" name="" value="John Rosie" />
        </WrapForm>
        <WrapForm className="email">
          <ContactText>E-mail:</ContactText>
          <Input type="text" name="" value="johnrosie@gmail.com" />
        </WrapForm>
        <WrapForm className="phone">
          <ContactText>Phone:</ContactText>
          <Input type="text" name="" value="380961234567" />
        </WrapForm>
        <WrapForm className="message">
          <ContactText>Message:</ContactText>
          <textarea>Your message</textarea>
        </WrapForm>
        <WrapForm className="submit">
          <BtnForm href="/">
            Send
            <ArrowBtn>
              <use href={iconsSvg + '#arrow-right-more'} />
            </ArrowBtn>
          </BtnForm>
        </WrapForm>
      </Fieldset>
    </Form>
  );
};
