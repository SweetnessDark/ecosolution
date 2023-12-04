import { styled } from 'styled-components';

export const Selector = styled.div`
  position: relative;
  top: 255px;
  z-index: 1;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 36px;

  display: flex;
  flex-direction: column-reverse;
`;

export const HeadingsFAQ = styled.h2`
  width: 320px;

  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 100% */
  text-transform: uppercase;
`;

export const Questions = styled.p`
  color: #173d33;
  text-align: center;
  font-family: Fira Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
`;

export const ContactUs = styled.a`
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border-radius: 500px;
  background: #97d28b;

  color: #173d33;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  margin-top: 12px;
  margin-left: 32%;
`;

export const BlackCircle = styled.div`
  width: 14px;
  height: 14px;
  background: #173d33;
  border-radius: 50%;
`;
