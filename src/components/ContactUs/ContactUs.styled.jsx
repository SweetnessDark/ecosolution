import { styled } from 'styled-components';

export const Selector = styled.div`
  position: relative;
  top: 255px;
  z-index: 1;
  padding-left: 20px;
  padding-right: 20px;

  margin-top: 36px;

  @media (min-width: 767px) {
    top: 400px;
  }
  @media (min-width: 1279px) {
    top: 424px;
  }
`;

export const HeadingContactUs = styled.h2`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 100% */
  text-transform: uppercase;
  text-align: center;
`;

export const WrapContactUsForm = styled.div`
  margin-top: 24px;
`;

export const Contact = styled.ul``;

export const ContactItems = styled.li`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  margin-bottom: 24px;
`;

export const ContactSvg = styled.svg`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

export const ContactText = styled.p`
  color: #173d33;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  margin-bottom: 8px;
`;

export const ContactPhone = styled.p`
  display: flex;
  gap: 8px;
  padding-bottom: 12px;

  &:nth-last-child(1) {
    padding-bottom: 0px;
  }
`;

export const ContactEmail = styled.p`
  display: flex;
  gap: 8px;
`;

export const ContactMap = styled.p`
  display: flex;
  gap: 8px;
`;

export const WrapContactNet = styled.div`
  display: flex;
  gap: 32px;
`;

export const ContactSocialNet = styled.svg`
  width: 24px;
  height: 24px;
`;
